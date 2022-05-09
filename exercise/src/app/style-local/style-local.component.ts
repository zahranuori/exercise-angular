import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-local',
  template: `
  <h1 *ngFor="let i of items">{{i}}</h1>
  <h2 *ngIf="items.length === 7 && isCorrect" > welcome to {{isCorrect}}</h2>
  <p> number is {{numbers}}</p>
  <button type="button" (click)="puls()">+</button>
  <button type="button" (click)="increment()">-</button>
  <br> 
  <button type="button" (click)="reset()">Reset number</button>
  `,
  styles: [`
  /* h1 { color: red;}, */
  h1:nth-child(even){ color:green},
  h1:nth-child(odd){ color:pink},
  h2{ color:red;},
  button { color: purple; }
  `]
})
export class StyleLocalComponent implements OnInit {
  isCorrect : boolean = true;
  numbers : number = 0;
  items: string[] = ["zahra","reza","reza","reza","reza","reza","reza"]; 
  
  constructor() { }

  ngOnInit(): void {
  
    }
    public puls() {
      this.numbers++;
    }
    public increment() {
      this.numbers--;
    }
    public reset() {
      this.numbers = 0;
    }

  }
  


