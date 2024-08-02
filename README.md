# js_project-and-learning-
mini js projects with learning

## 1) concept Array :- 

#### arrays

it is basic list of value have homogenious type 
is starts with [] "square braces"
for example 
```
const a=["hello","how","are",:"you"]



```

above `a` is array of type string array is a type of dataset as well

we can use object as well but there is some restriction of object, of using function so we use array here.

there are two ways to create an array:-

```
let arr=new Array();
let arr=[];
```

we can access array by their index number:-

here is an exmaple
```
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum

```
---
### Get Random Number 

to generate a random number we use random function,it is special function to work with mathemaical values.

syntex:-
```
Math.methodName(number);

```

**function you can use with Random**

* Math.round() 
* Math.ceil()
* Math.floor()
* Math.random()


#### math.ceil()
```
console.log(Math.ceil(6.2));  // 7

console.log(Math.ceil(6.3));  // 7

console.log(Math.ceil(6.5));  // 7

console.log(Math.ceil(6.8));  // 7

```

#### Math.floor()

```
console.log(Math.floor(6.2));  // 6

console.log(Math.floor(6.3));  // 6

console.log(Math.floor(6.5));  // 6

console.log(Math.floor(6.8)); // 6

```

**Explaining the Random function**
Math.random()

output between 0 and 1

```
let z=Math.random()
```
the above code will generate Random Number Between 0 and 1

```
Math.random()*10

```

``making formula to set min and max vlaue``

```
let min=5;

let max=100;

let random_value=Math.random()*(max-min)+min
```
**So, to generate a random number between the numbers 0 (inclusive) and 10 (inclusive), you would write the following:**

let min = 0;
let max = 10;
```
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//You will not get the same output
// 0

```