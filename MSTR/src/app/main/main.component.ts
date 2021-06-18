import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {MenuService} from '../service/menu.service';
import { ReturnStatement } from '@angular/compiler';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  bodyText: string;
  constructor(
    private menuService:MenuService
  ) { 
  }

  ngOnInit() {
  }
}
