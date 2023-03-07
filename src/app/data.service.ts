import { Injectable } from '@angular/core';
import { combineLatest, map, Observable, of } from 'rxjs';
import { IMenuItem } from './interfaces/help-menu-item.interface';
import data from './staticfile/rbo.static-file.json';

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
    const dataSource = data as IMenuItem[];
    return of(dataSource);
  }

  getTridionData(): Observable<IMenuItem[]> {
    const dataSource = data as IMenuItem[];
    return of(dataSource);
  }
}
