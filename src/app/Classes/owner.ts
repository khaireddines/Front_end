import { Acommodation } from './acommodation';
import { Taxi } from './taxi';
import { CarRent } from './car-rent';


export class Owner {
   
    id?:string;
    cin:string;
    name:string;
    email:string;
    phone:string;
    accommodations:Acommodation[];
    taxis:Taxi[];
    car_rents:CarRent[];

    
}
