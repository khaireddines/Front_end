import {Owner} from './owner';


export class Acommodation{
    
    id?:string;
    owner:Owner;
    description:string;
    capacity:string;
    beds:string;
    baths:string;
    availability:boolean;
    prix_night:Float32Array;
    address:string;
    picture:string;
}
