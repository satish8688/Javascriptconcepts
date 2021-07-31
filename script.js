let employees = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }
]; 

let list = document.querySelector('#list');
let arrElements = [];

// function displayUi(item) {
//     return `<li class="item"><div class="image">
//                     <img src=${item.avatar} alt="no image" />
//                 </div>
//                 <p class="name">${item.first_name}</p>
//                 </li>`
// }

for (const item of employees) {
    let listItems = `<li class="item"><div class="image">
                    <img src=${item.avatar} alt="no image" />
                </div>
                <p class="name">${item.first_name}</p>
                </li>`;
    arrElements.push(listItems)
}
// list.appendChild(listItems);
// list.innerHTML = employees.map(each => displayUi(each)).join('');
list.innerHTML = arrElements.join('');
// console.log(arrElements);

// var cat = document.getElementById("cat");
// var h = document.getElementById("h");
// var tag = document.createElement("a");

// var text = document.createTextNode("are yo ready");
// tag.appendChild(text);
// tag.setAttribute("href","/");
// console.log(tag);
// cat.appendChild(tag)


// FILTER BEFORE AND AFTER
// const filteredData = arr.filter(item => item === 2);
// const filteredData = arr.filter(item => {
//     if (item === 2) {
//         return item;
//     }
// });
// console.log(filteredData);

// let arr = [2, 3, 4, 6, 2, 3, 1, 2, 5];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 2) {
//         newArr.push(arr[i]);   
//     }
// }

// for (const key in arr) {
//     if(arr[key] === 2){
//         newArr.push(arr[key])
//     }
// }

// for (const val of arr) {
//     if(val === 2){
//         newArr.push(val)
//     }
// }

// console.log(newArr);

// let employees = [
//     { name: "sathish", id: 2323 },
//     { name: "werwe", id: 89656 },
//     { name: "dfssdf", id: 879 },
//     { name: "sdadasdfssdf", id: 879 },
//     { name: "dxcxv", id: 3454 },
//     { name: "thgj", id: 3453 },
//     { name: "uioui", id: 567567 },
//     { name: "ghgjh", id: 7898 },
//     { name: "rtyret", id: 3242 },
// ];

// let updatedEmployeesList = [];

// for (const emp of employees) {
//     console.log("inside loop--->",emp);  
//     // emp['location'] = 'hyd';
//     emp.location = 'hyd';
//     updatedEmployeesList.push(emp);
// }

// for (const key in employees) {
//     employees[key]['location'] = 'hyd';
//     // employees[key].location = 'hyd';
//     updatedEmployeesList.push(employees[key]);
// }

// for (let i = 0; i < employees.length; i++) {
//         employees[i]['location'] = 'hyd';
//         // employees[key].location = 'hyd';
//     updatedEmployeesList.push(employees[i]);
// }
// console.log("--------",updatedEmployeesList);

// const updatedList = employees.map(each => {
//     return {
//         ...each,
//         location: 'hyd'
//     }
// });

// const updatedList = employees.map(each => {
//     if (each.id === 879) {
//         return;
//     }
//     return {
//         empName: each.name,
//         empId: each.id,
//         empLocation: 'hyd'
//     }
// });



// console.log(updatedList);



// console.log(employees);

//  const emp = employees.filter(each => each.id  === 879);
//  const emp = employees.find(each => each.id  === 879);

//  console.log(emp);

// let tv = {
//     model: 'HD screen',
//     version: 5,
//     cost: 3000,
//     id: 1222324
// };
// tv['yearOfEst'] = 1999;
// tv['isNew'] = false;

// tv.yearOfEst = 1999;

// console.log(tv);