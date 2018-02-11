import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { SearchResult } from '../models/search-result.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
})
export class SearchResultComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'col-md-3 card-container';
  @Input() result: SearchResult;

  constructor() { }

  ngOnInit() {
  }

}
