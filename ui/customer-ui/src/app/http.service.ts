import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getDataSource() {
    return this.http.get("/get-data");
  }

  postDataSource(obj) {
    return this.http.post("/post-data", obj);
  }
}
