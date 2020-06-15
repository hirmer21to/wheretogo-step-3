import { Component, OnInit, Input } from '@angular/core';
import { LECTURES } from '../shared/mock-lectures';
import { Lecture } from '../shared/lecture';

@Component({
  selector: 'a.app-lecture-item',
  templateUrl: './lecture-item.component.html',
  styles: []
})
export class LectureItemComponent implements OnInit {
  @Input() lecture: Lecture;

  constructor() { }

  ngOnInit() {
  }

}
