import { Injectable } from "@angular/core";
import { combineLatest, map, Observable, of } from "rxjs";
import { AppType, IMenuItem } from "../libs/models/menu-item";
import rboData from "../static/rbo.static-file.json";
import rbbData from "../static/rbb.static-file.json";

@Injectable()
export class DataService {
  constructor() {}

  getData(appType: string) {
    return combineLatest([
      this.getStaticData(appType),
      this.getTridionData(),
    ]).pipe(
      map(([staticData, tridionData]) => {
        return [...staticData, ...tridionData];
      })
    );
  }

  getStaticData(appType: string): Observable<IMenuItem[]> {
    const dataSource = (
      appType === AppType.RBO ? rboData : rbbData
    ) as IMenuItem[];
    return of(dataSource);
  }

  getTridionData(): Observable<IMenuItem[]> {
    const dataSource = rboData as IMenuItem[];
    return of(dataSource);
  }
}
