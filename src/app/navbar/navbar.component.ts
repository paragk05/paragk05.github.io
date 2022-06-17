import { Component, OnInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  collapsed = true;
     toggleCollapsed(): void {
       this.collapsed = !this.collapsed;
  }
  ScrollIntoView(elem: string) {
    console.log(elem);
    document.querySelector(elem)?.scrollIntoView({behavior:'smooth', block:'start'})
  }
  reload() {
    window.location.reload()
  }
}
