import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "src/app/data.service";
import { HttpService } from "src/app/http.service";

@Component({
  selector: "app-form-component",
  templateUrl: "./form-component.component.html",
  styleUrls: ["./form-component.component.css"]
})
export class FormComponentComponent implements OnInit {
  //@Input("name") empName: string;

  constructor(
    private route: Router,
    private dataService: DataService,
    private httpservice: HttpService
  ) {}
  obj = {
    id: 2,
    name: "",
    age: "",
    gender: "",
    address: ""
  };
  ngOnInit() {}

  routingToTable() {
    this.route.navigate([""]);
  }

  //create the object from the form

  //take this obj and push in datasource of dataservice

  submitData() {
    console.log(this.obj);
    this.obj.id = this.obj.id + 1;
    this.dataService.dataSource.push(this.obj);

    this.httpservice.getDataSource().subscribe(res => {
      //this.dataService.dataSource.push(res);
    });
  }
}
