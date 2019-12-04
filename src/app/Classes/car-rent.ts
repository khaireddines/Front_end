import { Owner } from './owner';

export class CarRent {
    id?:string;
    registration_number:string;
    owner:Owner;
    mark:string;
    kilometer:string;
    availability:boolean;
    prix_day:Float32Array;
}
