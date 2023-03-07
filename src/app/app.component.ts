import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { IMenuItem } from './libs/models/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'service';
  menuItems: IMenuItem[] = [];

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getData().subscribe((menuItems: IMenuItem[]) => {
      this.menuItems = menuItems;
    });
  }
}
