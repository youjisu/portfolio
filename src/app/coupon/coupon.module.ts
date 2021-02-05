import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CouponPage } from './coupon.page';

import { CouponPageRoutingModule } from './coupon-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CouponPageRoutingModule
  ],
  declarations: [CouponPage]
})
export class CouponPageModule {}
