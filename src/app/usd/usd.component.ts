import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter.service';

@Component({
  selector: 'app-usd',
  templateUrl: './usd.component.html',
  styleUrls: ['./usd.component.css']
})
export class USDComponent implements OnInit {

  usd:string=""
  convertedINR:string=""
  constructor(private _converter:ConverterService) { }

  ngOnInit(): void {
  }

  convert(){
    this.convertedINR=JSON.stringify(this._converter.convertUSD(JSON.parse(this.usd)))
  }
}
