import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'coupon', loadChildren: () => import('./coupon/coupon-routing.module').then(m => m.CouponPageRoutingModule) },
  { path: 'home', loadChildren: () => import('./home/home-routing.module').then(m => m.HomePageRoutingModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
