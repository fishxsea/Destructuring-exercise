
var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
var a = obj.numbers.a;
var b = obj.numbers.b;

// Refactored 
const {a, b} = obj.numbers;





var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

// Refactored
[arr[0], arr[1]] = [arr[1], arr[0]]



raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/

const raceResults = ([first, second, third, ...rest]) => ([first, second, third, rest]);

