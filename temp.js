const name = "Maruthi";
const age = 25;
const job = "infosys";
const city = "Bangalore";


let pgm;

//without template literals ES5

// pgm = "<ul><li>Name: " + name + "</li><li>Age: " + age + "</li><li>Job: " + job + "</li><li>City: " + city + "</li></ul>";  
// document.getElementById('demo').innerHTML = pgm;

// pgm = "<ul><li>Name:" + name + "</li><li>Age:" + age + "</li><li>Job:" + job + "</li><li>City:" + city + "</li></ul>"

// document.getElementById('demo').innerHTML = pgm;

// with using template literals ES6

pgm = `<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
</ul>`;
document.getElementById('demo').innerHTML = pgm;