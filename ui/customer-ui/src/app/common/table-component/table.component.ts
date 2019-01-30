import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../../data.service";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent {
  constructor(private route: Router, private dataservice: DataService) {}
  displayedColumns: string[] = ["id", "name", "age", "gender", "address"];
  dataSource1 = this.dataservice.dataSource;
  routingToForm() {
    this.route.navigate(["form"]);
  }
}
