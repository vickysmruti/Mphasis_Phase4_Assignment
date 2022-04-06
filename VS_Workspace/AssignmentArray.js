//array
let cities = ['Indore','Mumbai','Pune'];
cities.push('Bangaluru');
cities.push('Bhubaneswar');
console.log(cities);

let l = cities.length;
console.log(l);

cities.unshift('Delhi');
cities[1] = 'Chennai';
cities.push('Kolkata');
console.log(cities);

cities.pop();
cities.pop();

console.log(cities);
console.log(l);

//spread
arr1 = ['Hello','World'];
arr2 = [1,2,3,4,5,6,7,8,9];
arr3 = [...arr1,...arr2];
console.log(arr3);

arr4 = ['a','j','t','r','f'];
arr5 = [...arr3,...arr4];
console.log(arr5);