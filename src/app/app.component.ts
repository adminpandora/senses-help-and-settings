import { Component, OnInit } from "@angular/core";
import { DataService } from "./services/data.service";
import { AppType, IMenuItem } from "./libs/models/menu-item";
import { ValidatorService } from "./services/validator.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "service";
  menuItems: IMenuItem[] = [];

  constructor(private validatorService: ValidatorService) {}
  ngOnInit(): void {
    this.validatorService
      .getData(AppType.RBO)
      .subscribe((menuItems: IMenuItem[]) => {
        this.menuItems = menuItems;
        console.log(this.menuItems);
      });
  }
}
