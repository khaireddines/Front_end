import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../Services/rest-api-Owner.service';
import { Owner } from '../Classes/owner';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  owners:Owner[];
  constructor(private restApiOwner:RestApiService) { }

  ngOnInit() {
    this.restApiOwner.getOwners().subscribe(Owners=> {
      this.owners=Owners;
      console.log(this.owners);
    });
    
  }

}
