const countryMap = new Map<string, string>();

countryMap.set("Pakistan", "Islamabad");
countryMap.set("Canada", "Ottawa");
countryMap.set("Japan", "Tokyo");

console.log(countryMap);

function checksCapitalInMap(countryMap: Map<string, string>): void {
  if (countryMap.has("Canada")) {
    console.log(`The capital of Canada is ${countryMap.get("Canada")}.`);
  } else {
    console.log(`Canada is not in the map.`);
  }
}

checksCapitalInMap(countryMap);
export {}
