import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { DataService } from "./services/data.service";
import { ValidatorService } from "./services/validator.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [ValidatorService, DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
