import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { IMenuItem } from "../libs/models/menu-item";
import { DataService } from "./data.service";

@Injectable({
  providedIn: "root",
})
export class ValidatorService {
  constructor(private dataService: DataService) {}

  getData(appType: string): Observable<IMenuItem[]> {
    return this.dataService
      .getData(appType)
      .pipe(
        map((data: IMenuItem[]) => this.applyTranslationValidation(data, "es"))
      );
  }

  applyTranslationValidation(
    data: IMenuItem[],
    predicate: string
  ): IMenuItem[] {
    return data.filter((d: IMenuItem) => {
      if (d.menuItems)
        d.menuItems = this.applyTranslationValidation(d.menuItems, predicate);
      return Object.keys(d.translations).some((k) => k === predicate);
    });
  }
}
