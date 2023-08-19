

## **Object Destructuring 1**

What does the following code return/print? 

```jsx
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846
```
```
8

1846
```

## **Object Destructuring 2**

What does the following code return/print?

```jsx
let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // ?
```
```
{yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
```

## **Object Destructuring 3**

What does the following code return/print?

```jsx
function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
getUserData({firstName: "Melissa"}) // ?
getUserData({}) // ?
```
```
Your name is Alejandro and you like purple

Your name is Melissa and you like green

Your name is undefined and you like green
```

## **Array Destructuring 1**

What does the following code return/print?

```jsx
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ?
console.log(second); // ?
console.log(third); // ?
```
```
Maya

Marisa

Chi
```

## **Array Destructuring 2**

What does the following code return/print?

```jsx
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // ?
console.log(whiskers); // ?
console.log(aFewOfMyFavoriteThings); // ?
```
```
Raindrops on roses

Whiskers on kittens

["Bright copper kettles", "warm wool mittens", "Brown paper packages tied up with strings"]
```

## **Array Destructuring 3**

What does the following code return/print?

```jsx
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // ?
```
```
[10, 30, 20]
```
##