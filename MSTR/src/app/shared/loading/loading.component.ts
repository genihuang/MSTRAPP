import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import lottie from 'lottie-web';
//import animationData from '../../../assets/images/loading.json';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  data = require('../../../assets/loading.json');
  constructor() { }
  @ViewChild('loading',{ static: true })
  private loading: ElementRef;
  
  ngOnInit() {
    lottie.loadAnimation({
      container:      this.loading.nativeElement, // Required
      animationData:  this.data,
      renderer:       'svg', // Required
      loop:           true, // Optional
      autoplay:       true, // Optional
      name:           'loading', // Name for future reference. Optional.
    });
  }

}
