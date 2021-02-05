import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponPage } from './coupon.page';

const routes: Routes = [
  {
    path: '',
    component: CouponPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponPageRoutingModule {}
