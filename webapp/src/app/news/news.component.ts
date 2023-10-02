import { Component } from '@angular/core';
import { NEWS } from '../mock-news';
import {OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  news = NEWS;
  control = new FormControl('');
  tags: string[] = [];
  filteredTags: Observable<string[]>;

  constructor() {
    // Init the values of all tags
    this.tags = [];
    this.news.forEach(element => {
      element.tags.forEach(tag => {
        if (!this.tags.includes(tag)) {
          this.tags.push(tag);
        }
      });
    });
    // Sort the array of tags
    this.tags = this.tags.sort((n1,n2) => {
        if (n1 > n2) {
            return 1;
        }
    
        if (n1 < n2) {
            return -1;
        }
    
        return 0;
    });

    this.filteredTags = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  ngOnInit() {
    this.filteredTags = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.tags.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}