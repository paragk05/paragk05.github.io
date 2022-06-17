import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  origChars: any;
  activeClass: boolean = false;

  constructor() { }
  scrambleList = [
    "Parag Khandalkar"
  ];

  ngOnInit(): void {
    setTimeout(()=> {
      this.charScramble()
    },2000)
  }
  charScramble() {
    var el = document.getElementById('scramble');
    el!.innerText = this.scrambleList[0];
    var orig = el!.innerText;
    this.origChars = orig.split('');
    this.scramble(el,0)
  }
  scramble(el:any, n:number) {
    el.innerText = this.origChars.slice(0, n).join('');
    for(var i = n; i < this.origChars.length; i++) {
      if (this.origChars[i] != ' ') {
        el.innerHTML += '<span class="scrambled">' + this.randomChar() + '</span>';
      } else {
        el.innerHTML += '<span class="scrambled"> </span>';
      }
    }
    setTimeout(()=> {
      n++;
      if(n<=this.scrambleList[0].length) {
        this.scramble(el, n);
        this.activeClass = false
      } else {
        this.activeClass = true
      }
    }, 120);
  };
 randomChar() {
    return String.fromCharCode(Math.floor(((Math.random() * 1000) % 73) + 49));
  };
}
 

