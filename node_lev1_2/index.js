import {names, numbers} from "./data.js"
import {firstElement, allExceptLastElement, lastElement, allExceptFirstElement, remove, removeDouble, sumUp, randomNumBetween, capitalizeFirstLetter, uppercase, checkString} from "./function.js"

firstElement(names) // expected output: Ahmed
firstElement(numbers) // expected output: 1

allExceptLastElement(names) // expected output: [ 'Ahmed', 'Christian', 'Simon' ]
allExceptLastElement(numbers) //expected output: [1, 6, 4, 2, 6, 8, 1, 4, 6, 4, 2, 1, 7, 9, 5]

lastElement(names) // expected output: Eric
lastElement(numbers) //expected output: 55

allExceptFirstElement(names) // expected output: ["Christian", "Simon", "Eric",]
allExceptFirstElement(numbers) // expected output:  [6, 4, 2, 6, 8, 1, 4, 6, 4, 2, 1, 7, 9, 5, 55]  */

remove(["remove", "stay", "stay5", 22, true, "remove"], "remove") //expected output: [“stay”, “stay5”, 22, true]

removeDouble([1,6,9,2,1,6,7,10]) //expected output: [1,6,9,2,7,10]

sumUp(numbers) //expected output: 121

randomNumBetween(10,20) //expected output: a random numebr between 10 and 20

capitalizeFirstLetter("hallo") // expected output: Hallo

uppercase("hallo") //expected output: HALLO

checkString("Test","t") //expected output: true

checkString("Test","q") //expected output: false

