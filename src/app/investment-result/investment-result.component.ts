import { Component, Input, input } from '@angular/core';
import { InvestmentData } from '../investment-resultData.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  // results = input<>() 
  results = input<InvestmentData[]>();

}
