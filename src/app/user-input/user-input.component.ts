import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investement.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {



  enteredInitialInvestment = signal('');
  enteredAnnualInvestment = signal('');
  enteredEcpectedReturn = signal('');
  enteredDuration = signal('');

  constructor(private investmentService: InvestmentService) {


  }

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredEcpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment()
    }
    );

    this.enteredInitialInvestment.set('');
    this.enteredDuration.set('');
    this.enteredAnnualInvestment.set('');
    this.enteredEcpectedReturn.set('');

  }
}
