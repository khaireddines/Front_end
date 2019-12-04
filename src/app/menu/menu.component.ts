import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label: 'Accommodation',
          icon: 'pi pi-home',
          style:{
              'margin-right':'75px'
          }
        },
      {
          label: 'Rent A Car',
          icon: 'fas fa-car',
          style:{
            'margin-right':'75px'
        }
      },
      {
          label: 'TaxiAllo',
          icon: 'fas fa-taxi',
      },
      
     
  ];
  }

}
