import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';

const routes: Routes = [{
  path: "",
  component: ProductCrudComponent
},
{
  path: "create",
  component: ProductCreateComponent
},
{
  path: "details",
  component: ProductRead2Component
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
