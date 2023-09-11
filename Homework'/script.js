//! Задание 1

let name = "Cartier"
let age = 18
let isStudent = true
let grades = [40, 50, 23, 90, 24, 52, 25]


//! Задание 2

// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof isStudent)
// console.log(typeof grades)
// console.log(typeof student)

//! Задание 3

// for  (let i = 0; i < grades.length; i++) {
//     console.log(grades[i])
// }

//! Задание 4

// let sum = 0
// let average = 0
//     for (let i = 0; i < grades.length; i++) {
//         sum += grades[i]
//         average += grades[i] / grades.length
//     }
//     console.log(sum , average)

//! Задание 5

    // for (let i = 0; i < grades.length; i++) {
    //      console.log(grades[i]*10)
    // }

//! Задание 6
    
    let student = {
        name: "Cartier",
        age: 18,
        grade: grades,
    }


//! Задание 7
let summ = 0
let avgB = 0
    
class Student {
        constructor(name, age, grade) {
            this.name = name 
            this.age = age
            this.grades = grade
        }

        averageBall() {
            for (let i = 0; i < this.grades.length; i++ ){
                summ += this.grades[i]
                avgB = summ / this.grades.length
            }
            return avgB
        }
    }

    let John = new Student('John', 20, [49, 69, 41, 20])

//     console.log(John , `Средний балл: ${John.averageBall()}`);
const buttonAVG = document.getElementById('Prs-to-check')
const AvgBall = document.getElementById('Avg-id')
const NameID = document.getElementById('Name-id')
const AgeID = document.getElementById('Age-id')
const GradesID = document.getElementById('Grades-id')

buttonAVG.addEventListener('click', () => {
    AvgBall.innerText = `Средний балл: ${John.averageBall()}`
    John.averageBall = 0
})

buttonAVG.addEventListener('click', () => {
    NameID.innerText = `Имя: ${John.name}`
})

buttonAVG.addEventListener('click', () => {
    AgeID.innerText = `${John.age} Лет`
})

buttonAVG.addEventListener('click', () => {
    GradesID.innerHTML = `${John.grades}`
})
