// JavaScript object
const person = {
  name: "Jhon",
  age: 30,
  city: "New York",
};

// Convert JavaScript object to formatted JSONs string with proper indevtation
const jsonString = JSON.stringify(person, null, 2);

console.log(jsonString);
/* Output:
{
    "name": "Jhon",
    "age": 30,
    "city": "New York"
}
*/
