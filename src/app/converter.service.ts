import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor() { }

  convertEuro(euro: number) {
    return euro * 81.05
  }
  convertUSD(usd:number){
    return usd * 79.30
  }
  convertCanadian(can:number){
    return can * 61.73
  }
}
