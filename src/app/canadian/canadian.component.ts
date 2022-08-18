import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../converter.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-canadian',
  templateUrl: './canadian.component.html',
  styleUrls: ['./canadian.component.css']
})
export class CANADIANComponent implements OnInit {

  currencyForm = new FormGroup({
    canadian: new FormControl('', [Validators.pattern('[0-9]*$'), Validators.required]),
    inr: new FormControl()
  })
  constructor(private _converter: ConverterService) { }

  ngOnInit(): void {
  }

  get countOfCurrency() {
    return this.currencyForm.get('canadian')
  }
  convertCurrency() {
    let converted = JSON.parse(this.currencyForm.get('canadian')?.value || "")
    let result = JSON.stringify(this._converter.convertCanadian(JSON.parse(converted)))
    this.currencyForm.get('inr')?.setValue(result)
  }
}
