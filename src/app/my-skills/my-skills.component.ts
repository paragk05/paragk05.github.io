import { Component, HostListener, OnInit } from '@angular/core';
import { listAnimation,actionAnimation } from '../animation';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.css'],
  animations: [
    listAnimation,
    actionAnimation
],
})
export class MySkillsComponent implements OnInit {
  hideBtn: any;
  activeCss = 1.4;
  visibleSkills: any;

  constructor() { }
  skillList : any = [
    {skill : 'HTML', link:'../../assets/html5.png',rating:5},
    {skill : 'CSS', link:'../../assets/css3.png',rating:4},
    {skill : 'Javascript', link:'../../assets/javascript.png',rating:4},
    {skill : 'Typescript', link:'../../assets/typescript.png',rating:4},
    {skill : 'Node.Js', link:'../../assets/nodejs.png',rating:4},
    {skill : 'Angular', link:'../../assets/angular.png',rating:4},
    {skill : 'Bootstrap', link:'../../assets/bootstrap.png',rating:3},
    {skill : 'MongoDB', link:'../../assets/mongodb.png',rating:3},
    {skill : 'Mysql', link:'../../assets/mysql.png',rating:4},
    {skill : 'Java', link:'../../assets/java.png',rating:3},
    {skill : 'PHP', link:'../../assets/php.png',rating:2},
    {skill : 'AWS', link:'../../assets/aws.png',rating:2},
    {skill : 'Prisma', link:'../../assets/prisma.png',rating:4},
    {skill : 'Sequelize', link:'../../assets/sequelize.png',rating:4},
    {skill : 'SpringBoot', link:'../../assets/spring.png',rating:2},""
  ]
  list : any = []
  initialLoad :any = 6
  hitCount :any = 0
  ngOnInit(): void {
    sessionStorage.setItem('exitIntet','false')
    this.list = this.getNames(this.skillList.length)
    console.log(this.list)
  }
  counter(i: number) {
    return new Array(i);
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
      let inital = document.documentElement.scrollTop;
      let final =  document.documentElement.offsetHeight;
      let open = (inital/final)*100;
      console.log(open)
      if(open>15){
        if (sessionStorage.getItem('exitIntet') == 'false') {
          console.log('Hit')
          this.visibleSkills = true
        }
      }
  }
  getNames(take: number): any {
    return this.skillList.slice(0,take)
  }
  loadMore() {
    this.hitCount++;
    console.log(this.hitCount)
    if(this.hitCount<2) {
      this.list = this.getNames(this.initialLoad+=6)
      this.hideBtn = false
    } else if(this.hitCount==2) {
      this.list = this.getNames(this.initialLoad+=4)
      this.hideBtn = true
    } else {
      this.hideBtn = true
    }
  }
}
