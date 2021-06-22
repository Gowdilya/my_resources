# Java Script Notes - Gowdilya Jeyakumar



### Code-Splitting

[Documentation](https://reactjs.org/docs/code-splitting.html)

Code-Splitting is a feature supported by bundlers (example: Webpack), which create multiple bundles that can dynamically be loaded at runtime(["lazy loading"](#lazy-loading))




### Lazy Loading

Lazy loading (also known as asynchronous loading) is a design pattern commonly used to defer initialization of resources until it is needed. 


# JavaScript

## Mutability

### Primitives are immutable in JavaScript

In JavaScript, primitives (String, Number, Boolean, Null, Undefined, and `Symbol`) are immutable; you cannot change the structure (add properties or methods) of a primitive. Nothing will happen even if you try to add properties to a primitive.

```
const egg = "Humpty Dumpty";
egg.isBroken = false;

console.log(egg); // Humpty Dumpty
console.log(egg.isBroken); // undefined
```


#### Objects are mutable
```
const egg = { name: "Humpty Dumpty" };
egg.isBroken = false;

console.log(egg);
// {
//   name: "Humpty Dumpty",
//   isBroken: false
// }
```


#### const doesn’t grant immutability
Declaring a variable with const doesn’t make it immutable, `it prevents you from assigning another value to it.`
```
const myName = "Zell";
myName = "Triceratops";
// ERROR 
```
When you declare an object with const, you’re still allowed to mutate the object. In the egg example above, even though egg is created with const, const doesn’t prevent egg from mutating.

```const egg = { name: "Humpty Dumpty" };
egg.isBroken = false;

console.log(egg);
// {
//   name: "Humpty Dumpty",
//   isBroken: false
// }
 ```

#### PROBLEM with mutability
```
const egg = { name: "Humpty Dumpty" };

const newEgg = egg;
newEgg.name = "Errr ... Not Humpty Dumpty
```
`... changing newEgg also changes egg automatically = mutability`
```
console.log(egg);
// {
//   name: "Errr ... Not Humpty Dumpty"
// }
```


#### 3. Objects are passed by Reference in JavaScript

When you assign an object to a variable, you link the variable to the identity of the object (that is, you pass it by reference) rather than assigning the variable the object’s value directly. This is why when you compare two different objects, you get false even if the objects have the same value.

    console.log({} === {}); // false


# ES6 features
### Arrow Functions

They support both statement block bodies as well as expression bodies which return the value of the expression.

 `NO CLOSURE   = Unlike functions, arrows share the same lexical this as their surrounding code.`
    
    // Expression bodies
    var odds = evens.map(v => v + 1);
    var nums = evens.map((v, i) => v + i);
    var pairs = evens.map(v => ({even: v, odd: v + 1}));

    // Statement bodies
    nums.forEach(v => {
    if (v % 5 === 0)
        fives.push(v);
    });

    // Lexical this
    var bob = {
        _name: "Bob",
        _friends: [],
        printFriends() {
            this._friends.forEach(f =>
            console.log(this._name + " knows " + f));
        }
    }
`Arrow functions don’t have a separate this . When trying to access this inside an arrow function it’ll fall back to the previous scope, since they don’t have their own this defined.`

## Array
### Join

Common Problem: If you want to take an array of strings and turn them into a single comma seperated string. This would be the ideal way.

    const elements = ['Fire', 'Air', 'Water'];
    console.log(elements.join());
    // expected output: "Fire,Air,Water"       


