import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {IFileURLs, IMenuItem, ITranslation} from "../libs/models/menu-item";
import {DataService} from "./data.service";

@Injectable({
    providedIn: "root",
})
export class ValidatorService {
    constructor(private dataService: DataService) {
    }


    getData(appType: string): Observable<IMenuItem[]> {
        return this.dataService
            .getData(appType)
            .pipe(
                map((data: IMenuItem[]) => this.applyTranslationValidator(data, "es"))
            );
    }

    private applyTranslationValidator(
        data: IMenuItem[],
        language: string
    ): IMenuItem[] {
        return data.filter((d: IMenuItem) => {
            if (d.menuItems)
                d.menuItems = this.applyTranslationValidator(d.menuItems, language);
            const isTranslationFound = Object.keys(d.translations).some((translationKey) => translationKey === language)
            if (isTranslationFound && d.translations) {
                d.translations = this.filterTranslationDataByLanguage( d.translations,language);
            }
            if (isTranslationFound && d.routing && d.routing.urls) {
                d.routing.urls = this.filterFileUrlsByLanguage(d.routing.urls,language);
            }
            return isTranslationFound;
        });
    }

    private filterTranslationDataByLanguage(translationData:ITranslation, language:string){
      return  Object.fromEntries(Object.entries(translationData)
          .filter((key) => key.includes(language))) as ITranslation;
    }
    private filterFileUrlsByLanguage(fileURLsData:IFileURLs, language:string){
        return  Object.fromEntries(Object.entries(fileURLsData)
            .filter((key) => key.includes(language))) as IFileURLs;
    }
}
