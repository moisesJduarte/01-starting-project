import { Injectable, signal } from "@angular/core";
import { investmentInput } from "./investment-input.model";
import { InvestmentData } from "./investment-resultData.model";

@Injectable({ providedIn: 'root' })

export class InvestmentService {
    resultData = signal<InvestmentData[] | undefined>(undefined);


    calculateInvestmentResults(data: investmentInput) {

        const {
            initialInvestment,
            annualInvestment, expectedReturn,
            duration } = data;

        const annualData = [];
        let investmentValue = initialInvestment;

        for (let i = 0; i < duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + annualInvestment;
            const totalInterest =
                investmentValue - annualInvestment * year - initialInvestment;
            annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested: initialInvestment + annualInvestment * year,
            });
        }
        this.resultData.set(annualData);
        // this.resultData = annualData;
    }
}