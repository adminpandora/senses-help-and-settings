import { Injectable } from '@angular/core';
import { combineLatest, map, Observable, of } from 'rxjs';
import { IMenuItem } from '../libs/models/menu-item';
import rboData from '../static/rbo.static-file.json';
import rbbData from '../static/rbb.static-file.json';

@Injectable()
export class DataService {
  constructor() {}

  getData() {
    return combineLatest([this.getStaticData(), this.getTridionData()]).pipe(
      map(([staticData, tridionData]) => {
        return [...staticData, ...tridionData];
      })
    );
  }

  getStaticData(): Observable<IMenuItem[]> {  
    const dataSource = rboData as IMenuItem[];
    return of(dataSource);
  }

  getTridionData(): Observable<IMenuItem[]> {
    const dataSource = rboData as IMenuItem[];
    return of(dataSource);
  }
}
