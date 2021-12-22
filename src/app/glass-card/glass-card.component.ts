import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-glass-card',
  templateUrl: './glass-card.component.html',
  styleUrls: ['./glass-card.component.scss'],
})
export class GlassCardComponent implements OnInit {
  @Input() input: string = new Input;
  constructor() { }

  ngOnInit() {
    
  }

}
