import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {
  mobileView: boolean =false;

  constructor() { }

  ngOnInit(): void {
    if (window.screen.width <= 768) { // 768px portrait
      this.mobileView = true;
    } else {
      this.mobileView = false;
    }
  }

}
