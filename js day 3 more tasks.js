

const calculateArea = function (r) {
    // return (3.14 * r ** 2)
    return Math.PI * Math.pow(r, 2)
}

console.log(calculateArea(5))
console.log(calculateArea(10))


////


const reverseString = function (str) {
    var rev = '';
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i]
    }
    return rev
}

var job = 'im a web developer'
console.log(reverseString(job))
console.log(reverseString('hello'))

/////


function filterEvenNumbers(x) {
    var y = []
    for (let i in x) {
        if (x[i] / 2 === Math.floor(x[i] / 2)) {
            y.push(x[i])
        }
    }
    return y
}

const arrayEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(filterEvenNumbers(arrayEven))
const arrayEven1 = [11, 22, 33, 44, 55, 66]
console.log(filterEvenNumbers(arrayEven1))



/////



const library = {
    books: [],
    addBook: function (x) {
        this.books.push(x)
    }
}

library.addBook({ title: '1984', author: 'George Orwell' })
library.addBook({ title: 'To Kill a Mockingbird', author: 'Harper Lee' })



//////


function sumArray(x) {
    let y = 0;
    for (let i in x) {
        y += x[i]
    }
    return y
}

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sumArray(myNum))


/////


function countVowels(str) {
    let y = 0;
    for (let i in str) {
        if (['a', 'e', 'o', 'u', 'i'].includes(str[i])) {
            y++
        }
    }
    return y
}

console.log(countVowels('helloooouuu'))
console.log(countVowels('javascript'))


////


function capitalizedWords(str) {
    let strArray = str.split(' ')
    let strUpperCase = []
    for (let i = 0; i < strArray.length; i++) {
        let x = strArray[i]
        strUpperCase.push(x[0].toUpperCase() + x.slice(1))
    }
    return strUpperCase.join(' ')
}

console.log(capitalizedWords('hello world hello world hello world'))


/////////


function revSplit(str) {
    const splitArray = str.split(' ')
    return splitArray.reverse()
}

console.log(revSplit('JavaScript is fun'))
