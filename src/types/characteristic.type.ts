import { CharacteristicValueT } from "./characteristic-value.type";

export type CharacteristicT = {
    id:number,
    name:string,
    value?:CharacteristicValueT,
    values:CharacteristicValueT[]
}