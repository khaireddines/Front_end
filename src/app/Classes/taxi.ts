import { Owner } from './owner';

export class Taxi {
    id?:string;
    registration_number:string;
    taxi_number:string;
    owner:Owner;
    mark:string;
    onService:boolean;
}
