var request = new XMLHttpRequest();

request.open("get", "https://restcountries.com/v2/all");

request.send();

request.onload = function () {
  var result = JSON.parse(request.response);
  console.log(result);
  //Get all the countries from the Asia continent /region using the Filter function

  let reg = result.filter((ele) => ele.region === "Asia");
  console.log(reg);
  //Get all the countries with a population of less than 2 lakhs using Filter function

  let pop = result.filter((ele) => ele.population < 200000);
  console.log(pop);

  //Print the following details name, capital, flag using forEach function

  result.forEach((result) => {
    console.log(
      `Name: ${result.name}, Capital: ${result.capital}, Flag: ${result.flag}`
    );
  });

  //Print the total population of countries using reduce function

  let tot = result.reduce((a, b) => a + b.population, 0);
  console.log(tot);

  //Print the country which uses US Dollars as currency.

  let cur = result.filter((ele) => {if(ele.currencies){
   return ele?.currencies[0]?.code == "USD"
  }
  } );
  console.log(cur);
};
