import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}

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
