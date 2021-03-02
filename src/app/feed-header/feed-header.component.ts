import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'feed-header',
  templateUrl: './feed-header.component.html',
  styleUrls: ['./feed-header.component.scss'],
})
export class FeedHeaderComponent implements OnInit {
  @Input() name: string;
  @Input() date: string;

  constructor() { }

  ngOnInit() {}

}
