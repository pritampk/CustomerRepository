import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "src/app/data.service";

@Component({
  selector: "app-form-component",
  templateUrl: "./form-component.component.html",
  styleUrls: ["./form-component.component.css"]
})
export class FormComponentComponent implements OnInit {
  //@Input("name") empName: string;

  constructor(private route: Router, private dataService: DataService) {}
  obj = {
    id: "",
    name: "",
    age: "",
    sex: "",
    address: ""
  };
  ngOnInit() {}

  routingToTable() {
    this.route.navigate([""]);
  }

  //create the object from the form

  //take this obj and push in datasource of dataservice
  datasource = this.dataService.dataSource.push;
}
