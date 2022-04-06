// push
let stacks = ['vicky', 'vishal'];

stacks.push('bunty');
console.log(stacks);

stacks.unshift('dev');
console.log(stacks);

stacks[3]='deepak';

console.log(stacks);

// pop

let stack2=['vicky', 'vishal', 'bunty', 'dev'];

console.log(stack2);
stack2.pop();
console.log(stack2);

const removedElement = stack2.pop();

console.log(removedElement);
console.log(stack2);

comnsole.log(count(stack2));
