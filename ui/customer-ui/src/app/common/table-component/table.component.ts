import { Component } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent {
  displayedColumns: string[] = ["id", "name", "age", "gender", "address"];
  dataSource = [
    {
      id: 1,
      name: "Rajat",
      age: 25,
      gender: "Male",
      address: "BTM layout 1st Stage"
    },
    { id: 2, name: "Pritam", age: 25, gender: "Male", address: "Roopena Agara" }
  ];
}
