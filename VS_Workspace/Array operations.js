// --------------------------Push-------------------------------
let dailyActivities = ['eat', 'sleep'];

// add an element at the end
dailyActivities.push('exercise');

//add an element at the start
dailyActivities.unshift('work'); 

// this will add the new element 'exercise' at the 2 index
dailyActivities[2] = 'exercise';

// this will add the new element 'exercise' at the 3 index
dailyActivities[3] = 'exercise';

console.log(dailyActivities);



// --------------------------Pop-------------------------------
let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];

// remove the last element
dailyActivities.pop();
console.log(dailyActivities); 

// remove the last element from ['work', 'eat', 'sleep']
const removedElement = dailyActivities.pop();

//get removed element
console.log(removedElement); 
console.log(dailyActivities);

// remove the first element
dailyActivities.shift();
console.log(dailyActivities);

// this gives the total number of elements in an array
console.log(dailyActivities.length);