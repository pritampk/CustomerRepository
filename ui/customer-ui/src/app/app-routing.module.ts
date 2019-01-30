import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TableComponent } from "../app/common/table-component/table.component";
import { FormComponentComponent } from "../app/common/form-component/form-component/form-component.component";
const routes: Routes = [
  { path: "", component: TableComponent },
  { path: "form", component: FormComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
