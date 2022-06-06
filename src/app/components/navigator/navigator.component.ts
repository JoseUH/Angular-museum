import { Component, OnInit } from '@angular/core';
import { NavigatorInterface } from 'src/app/models/general-interfaces';


@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  public navigatorInfo: NavigatorInterface[];
  public isDark: boolean = false;
  public theme: string = "🌙"
  constructor() {

    this.navigatorInfo = [{
      content: "Home",
      link: "#home"
    }, {
      content: "Gallery",
      link: "#gallery"
    },
    {
      content: "About",
      link: "#about"
    }]
  }

  ngOnInit(): void {
  }

  public changeTheme = () => {
    if(this.isDark === false){
      this.isDark = true;
      this.theme = "☀️"
    } else{
      this.isDark = false;
      this.theme = "🌙"
    }

    console.log(this.isDark)
  }
}



