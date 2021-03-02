import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedHeaderComponent } from './feed-header.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [FeedHeaderComponent],
  exports: [FeedHeaderComponent]
})
export class FeedHeaderComponentModule {}
