function individualNetSalaray(basicSalary,benefits) {
    const taxRate = {
      "up to 24000":10,
      "240001 - 32333":25,
      "323334 - 5000000":30,
      "500001 - 80000000":32,
      "80000000 and above":35,
    }
  
  
    const nhif = {"up to 5,999":150,
      "6000-7999":300,
      "8000-11999":400,
                  "12000-14999":500,
                  "15000-19999":600,
                  "20000-24999":700,
                  "25000-29999":800,
                  "30000-34999":900,
                  "35000-39999":1000,
                  "40000-44999":1100,
                  "45000-49999":1200,
                  "50000-59999":1300,
                  "60000-69999":1400,
                  "70000-79999":1500,
                  "80000-89999":1600,
                  "90000-99999":1700,
                  "100000-10999":1800,
                  "above 120000":2000,
                 };
    const nssf = {"up to 5,999":150,
                  "6000-18000":300,
                  "18000-25000":400,
                  };
    {
    const grossSalary = basicSalary + benefits; }
    let payee = grossSalary * taxRate[basicSalary] / 100;
    for(const rate in taxRates){const[lower,uer]=rate.split("-"); if(upper){
      const lowerLimit = parseInt(lower.replace(/,/g,""));
      const upperLimit = parseInt(upper.replace(/,/g,""));
    if(grossSalary >= lowerLimit && grossSalary <= upperLimit){
      nhifDeuction = nhif[rate];
   break; }}}}
  const netSalary = grossSalary-payee-nssfDeduction;
  return{
    payee,
    nssfDeduction,
    grossSalary,
    netSalary,
  };