import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { investmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  calculate = output<investmentInput>();


  enteredInitialInvestment = signal('');
  enteredAnnualInvestment = signal('');
  enteredEcpectedReturn = signal('');
  enteredDuration = signal('');


  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredEcpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment()
    });
    this.enteredInitialInvestment.set('');
    this.enteredDuration.set('');
    this.enteredAnnualInvestment.set('');
    this.enteredEcpectedReturn.set('');

  }
}
