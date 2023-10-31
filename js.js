
let incomeTot = 0;
let expenseTot = 0;

function incomeSubmit()
{
  let incom=document.querySelector("#income").value
  let incomca=document.querySelector("#income-cat").value
 if(incom == "" || incom ==0 || isNaN(incom)){
    alert("Income Cannot Be Null,text,empty")
    document.getElementById("income").value = "";
    document.getElementById("income-cat").value = "";

 }
 if(incomca.length<=0 || !isNaN(incomca))
 {
    alert("Income Catergoty Cannot Be Null,Number,empty")
    document.getElementById("income").value = "";
    document.getElementById("income-cat").value = "";
 }
 
 else{
    const income = parseFloat(document.getElementById("income").value);
    console.log(income);
    const incomeCat = document.getElementById("income-cat").value;
    console.log(incomeCat);
    incomeTot += income
    
    const row = document.createElement("tr")

   const incomestore = document.createElement("td");
   incomestore.textContent = income;

   const incomecatstore = document.createElement("td");
   incomecatstore.textContent = incomeCat;

    row.appendChild(incomestore);
    row.appendChild(incomecatstore);

    document.getElementById("tablee").appendChild(row)
    document.getElementById("income").value = "";
    document.getElementById("income-cat").value = "";
    document.getElementById("incometotal").textContent=incomeTot
    
 }
 
 chr() 
}

function expenseSubmit()
{
    let expensec =document.getElementById("expense").value
    let expenseca =document.getElementById("expense-cat").value

    if(expensec == "" || expensec ==0 || isNaN(expensec)){
        alert("Expense Cannot Be Null,text,empty")
        document.getElementById("expense").value = "";
        document.getElementById("expense-cat").value = "";
    
     }
     if(expenseca.length<=0 || !isNaN(expenseca))
     {
        alert("Expense Catergoty Cannot Be Null,Number,empty")
        document.getElementById("expense").value = "";
        document.getElementById("expense-cat").value = "";
     }
     
     else{

    const expense =parseFloat(document.getElementById("expense").value);
    console.log(expense);
    const expenseCat = document.getElementById("expense-cat").value;
    console.log(expenseCat);
    expenseTot += expense


    const row = document.createElement("tr")

   const expstore = document.createElement("td");
   expstore.textContent = expense;

   const expcatstore = document.createElement("td");
   expcatstore.textContent = expenseCat;

    row.appendChild(expstore);
    row.appendChild(expcatstore);

    document.getElementById("tablee2").appendChild(row)
    document.getElementById("expense").value = "";
    document.getElementById("expense-cat").value = "";
    document.getElementById("expensetotal").textContent=expenseTot
    
     }
     chr()
}

function chr()
{
    const xValues = ["income", "expense"];
const yValues = [incomeTot, expenseTot];
const barColors = [
  "#b91d47",
  "#00aba9"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});
}




