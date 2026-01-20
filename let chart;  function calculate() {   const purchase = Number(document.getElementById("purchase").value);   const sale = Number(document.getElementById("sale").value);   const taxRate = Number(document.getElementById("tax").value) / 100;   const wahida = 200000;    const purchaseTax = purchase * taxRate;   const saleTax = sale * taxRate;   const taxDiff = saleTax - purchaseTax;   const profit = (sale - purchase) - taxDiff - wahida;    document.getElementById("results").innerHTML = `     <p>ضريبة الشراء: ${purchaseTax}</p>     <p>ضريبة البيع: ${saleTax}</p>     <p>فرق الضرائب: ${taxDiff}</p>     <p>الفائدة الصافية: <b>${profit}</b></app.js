let chart;

function calculate() {
  const purchase = Number(document.getElementById("purchase").value);
  const sale = Number(document.getElementById("sale").value);
  const taxRate = Number(document.getElementById("tax").value) / 100;
  const wahida = 200000;

  const purchaseTax = purchase * taxRate;
  const saleTax = sale * taxRate;
  const taxDiff = saleTax - purchaseTax;
  const profit = (sale - purchase) - taxDiff - wahida;

  document.getElementById("results").innerHTML = `
    <p>ضريبة الشراء: ${purchaseTax}</p>
    <p>ضريبة البيع: ${saleTax}</p>
    <p>فرق الضرائب: ${taxDiff}</p>
    <p>الفائدة الصافية: <b>${profit}</b></p>
  `;

  drawChart(profit);
}

function drawChart(profit) {
  const ctx = document.getElementById('profitChart');
  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['الفائدة'],
      datasets: [{
        label: 'الربح الصافي',
        data: [profit]
      }]
    }
  });
}
