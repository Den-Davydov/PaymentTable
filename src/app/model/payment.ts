import { Item } from "./item";

export interface Payment {
  
     title: string,
     cost: number,
     items?: Item[]
 
}