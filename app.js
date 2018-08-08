const outp1 = document.getElementById('output-1');
const outp2 = document.getElementById('output-2');

/*
const myObjJason = {
    "people": [
        { "firstName": "Mike", "lastName": "Smith", "age": 30 },
        { "firstName": "Moh", "lastName": "Moharram", "age": 42 }
    ],
    "places": [
        { "location": "New York", "lat": 67, "long": 110 },
        { "location": "Egypt", "lat": 70, "long": 88 }
    ]

};


async function obj() {

    const result = await fetch('https://api.myjson.com/bins/jbhu0');
    const myObj = await result.json();
    const people = myObj.people;
    for (let i = 0; i < myObj.people.length; i++) {
        outp1.innerHTML += people[i].firstName + ' ' + people[i].lastName + '<br>';
        outp2.innerHTML += myObj.places[i].location + ', ';
    }
    console.log(myObj);
}
// obj();
*/

/////////////////////////////////////////////////
/*
const myObj = JSON.parse(myObjJson);

console.log(myObj);
*/
////////////////////////////////////

const hr = new XMLHttpRequest();
// const url = "json.js";
// const url = "https://api.myjson.com/bins/jbhu0";
const url = "index.html";

hr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        outp1.innerHTML = hr.responseText;
    }
}

hr.open('GET', url, true);
hr.send();

console.log(hr);