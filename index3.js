function calculateNetSalary(basicSalary, benefits) { 
  // Calculating the gross salary 
  const grossSalary = basicSalary + benefits; 
  //calculating the PAYE (Tax) 
  let tax = 0; if (grossSalary <= 24000) { tax = grossSalary * 0.1; } 
  else if (grossSalary <= 32333) { tax = grossSalary * 0.25; } 
  else if (grossSalary <= 500000) { tax = grossSalary * 0.3; } 
  else if (grossSalary <= 800000) { tax = grossSalary * 0.325; } 
  else { tax = grossSalary * 0.35; } 
  //calculating NHIF Deductions 
  let nhifDeduction = 0; if (grossSalary <= 5999) { nhifDeduction = 150; }
   else if (grossSalary <= 7999) { nhifDeduction = 300; } 
   else if (grossSalary <= 11999) { nhifDeduction = 400; }
   else  if (grossSalary <= 14999) { nhifDeduction = 500; } 
   else if (grossSalary <= 19999) { nhifDeduction = 600; } 
   else if (grossSalary <= 24999) { nhifDeduction = 750; } 
   else if (grossSalary <= 29999) { nhifDeduction = 850; } 
   else if (grossSalary <= 34999) { nhifDeduction = 900; } 
   else if (grossSalary <= 39999) { nhifDeduction = 950; } 
   else if (grossSalary <= 44999) { nhifDeduction = 1000; } 
   else if (grossSalary <= 49999) { nhifDeduction = 1100; } 
   else if (grossSalary <= 59999) { nhifDeduction = 1200; } 
   else if (grossSalary <= 69999) { nhifDeduction = 1300; } 
   else if (grossSalary <= 79999) { nhifDeduction = 1400; } 
   else if (grossSalary <= 89999) { nhifDeduction = 1500; } 
   else if (grossSalary <= 99999) { nhifDeduction = 1600; } 
   else if (grossSalary >= 100000) { nhifDeduction = 1700; } 
   //calculating the NSSF Deductions 
   let nssfDeduction = 0; if (basicSalary <= 6000) { nssfDeduction = basicSalary * 0.06; } 
   else if (basicSalary >= 18000) { nssfDeduction = basicSalary * 0.06; } 
   //calculating the net salary 
   const netSalary = grossSalary - (tax + nhifDeduction + nssfDeduction);
    // including all Values to be Returned 
    return { grossSalary, tax, nhifDeduction, nssfDeduction, netSalary, }; } 
    // passing in values to test the function(s) 
    const basicSalary = 100000; const benefits = 70000; const salaryDetails = calculateNetSalary(basicSalary, benefits); console.log(salaryDetails);
