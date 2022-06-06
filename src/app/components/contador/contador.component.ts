import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {
public results:number=0;
  constructor() { }

  ngOnInit(): void {}

    public rest = () => {
      
        this.results += -1;
      
      }
    
    public sum = () => {
      
        this.results += +1;
      
      
    }
  
  }


