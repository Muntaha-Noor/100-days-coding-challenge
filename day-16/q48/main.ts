const laptopPrice1 = [1200, 900, 1500];
const laptopPrice2 = [1000, 1100, 1300];

const combinedLaptopPrices = [...laptopPrice1, ...laptopPrice2].sort((a, b) => a-b);
console.log(combinedLaptopPrices);