import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor(private test:TestService){

  }
  sum(x:number, y:number){
    return x + y
  }
  ngOnInit(): void {
    this.test.printText("Khaled")
  }
}
