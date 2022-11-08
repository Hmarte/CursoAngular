import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image:string="https://miro.medium.com/max/512/1*_T_tWFGY29J6MEKek1vBaw.png";
  public Titulo:string="Curso de Angular con interpolación";
  constructor() { }

  ngOnInit(): void {
  }

}
