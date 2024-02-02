import {BeerType} from "./beer-type";
import {ServingStyle} from "./serving-style";
import {Location} from "./location";

export interface CheckIn {
    id: string,
    brewery: string,
    beerName: string,
    beerType: BeerType,
    review: string,
    rating: number,
    servingStyle: ServingStyle,
    location: Location,
}