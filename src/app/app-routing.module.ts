import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpostComponent } from './addpost/addpost.component';
import { ListpostComponent } from './listpost/listpost.component';
import { UpdatepostComponent } from './updatepost/updatepost.component';

const routes: Routes = [
  
  {
    path:'list',
    component:ListpostComponent,
  },
  {
    path:'add',
    component:AddpostComponent,
  },
  {
    path:'update/:id',
    component:UpdatepostComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
