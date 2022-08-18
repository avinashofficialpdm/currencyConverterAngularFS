import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter.service';

@Component({
  selector: 'app-euro',
  templateUrl: './euro.component.html',
  styleUrls: ['./euro.component.css']
})
export class EUROComponent implements OnInit {

  euro:string=""
  convertedINR:string=""
  constructor(private _converter:ConverterService) { }

  ngOnInit(): void {}

  convert(){
    this.convertedINR=JSON.stringify(this._converter.convertEuro(JSON.parse(this.euro)))
  }
}
