import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goBack',
  templateUrl: './goBack.component.html',
  styleUrls: ['./goBack.component.css']
})
export class GoBackComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }

}
