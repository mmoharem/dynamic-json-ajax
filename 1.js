const outp1 = document.getElementById('output-1');
const outp2 = document.getElementById('output-2');

/*
const myObj = {
    firstName: 'Mike',
    lastName: 'Smith',
    age: 30
}



console.log(myObj);
const name = 'Name';

outp1.innerHTML = myObj.firstName;
// outp2.innerHTML = myObj['last' + name];
outp2.innerHTML = myObj[`last${name}`];

*/

////////////////////////////////////////////////////////////////

// const myObj = {
//     people: [
//         { firstName: 'Mike', lastName: 'Smith', age: 30 },
//         { firstName: 'Moh', lastName: 'Moharram', age: 42 }
//     ],
//     places: [
//         { location: 'New York', lat: 67, long: 110 },
//         { location: 'Egypt', lat: 70, long: 88 }
//     ]

// };



// console.log(myObj);

/*
const name = 'Name';
let i = 0;

outp1.innerHTML = myObj.people[i].firstName + ' ';
outp2.innerHTML = myObj.people[i][`last${name}`] + ' ';

i = 1;

outp1.innerHTML += myObj.people[i].firstName;
outp2.innerHTML += myObj.people[i][`last${name}`];

// My solution:
// outp1.innerHTML = myObj.people[0].firstName;
// myObj.people.forEach(pers => { outp2.insertAdjacentHTML('beforeend', `<p>${pers.firstName} ${pers.lastName} age is: ${pers.age}</p>`) });
*/
// const people = myObj.people;
// for (let i = 0; i < myObj.people.length; i++) {
//     outp1.innerHTML += people[i].firstName + ' ' + people[i].lastName + '<br>';
//     outp2.innerHTML += myObj.places[i].location + ', ';
// }