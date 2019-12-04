import { Component, OnInit, Input } from '@angular/core';
import { Owner } from '../Classes/owner';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() owner:Owner;
  constructor() { }

  ngOnInit() {
    
    
  }

}
