const calc = require('./calculation');

// app.js

// employee details
const hoursPerDay = 4;
const daysPerWeek = 6;
const rph = 300;

// deductions
const sss = 1200;
const pagIbig = 300;
const philHealth = 400;
const taxRate = 0.10;

// gross salary
const totalHours = calc.multiply(hoursPerDay, daysPerWeek);
const grossSalary = calc.multiply(totalHours, rph);

// tax
const tax = calc.multiply(grossSalary, taxRate);

// total deductions
const totalDeductions = calc.add(calc.add(calc.add(sss, pagIbig), philHealth), tax);

// net salary
const netSalary = calc.subtract(grossSalary, totalDeductions);

// average salary per hour (for divide sample purposes)
const averageSalaryPerHour = Math.round(calc.divide(netSalary, totalHours) * 100) / 100;

// results
console.log('Gross Salary:', grossSalary);
console.log('Tax:', tax);
console.log('SSS:', sss);
console.log('Pag-Ibig:', pagIbig);
console.log('PhilHealth:', philHealth);
console.log('Total Deductions:', totalDeductions);
console.log('Net Salary:', netSalary);
console.log('Average Salary per Hour:', averageSalaryPerHour);
