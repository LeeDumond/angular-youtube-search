import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../models/search-result.model';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
})
export class YoutubeSearchComponent implements OnInit {
  results: SearchResult[];
  loading: boolean;

  constructor() { }

  ngOnInit() {
  }

  updateResults(results: SearchResult[]): void {
    this.results = results;
    // console.log('results: ', this.results);
  }

}
