import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TableComponent } from "../app/common/table-component/table.component";
import { DataService } from "./data.service";

import { FormComponentComponent } from "./common/form-component/form-component/form-component.component";

@NgModule({
  declarations: [AppComponent, TableComponent, FormComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
