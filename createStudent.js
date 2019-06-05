//array of students
const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]
const failing = (students) => {
    return `
        <div class="student">
            <h1 class="xx-large failing">${students.name}</h1>
            <section class="bordered dashed section--padded">${students.subject}</section>
            <aside>${students.info}</aside>
        </div>
    `
}
const passing = (students) => {
    return `
        <div class="student">
            <h1 class="xx-large passing">${students.name}</h1>
            <section class="bordered dashed section--padded">${students.subject}</section>
            <aside class="pushRight">${students.info}</aside>
        </div>
    `
}
const studentContainer = document.querySelector('#container')

for (const student of students) {
    if (student.score <= 60) {
        studentContainer.innerHTML += failing(student);
    } else {
        studentContainer.innerHTML += passing(student);
    }
};

/*<div class="student">
    <h1 class="xx-large passing">${student.Name}</h1>
    <section class="bordered dashed section--padded">${student.subject}</section>
    <aside class="pushRight ">${student.info}</aside>
</div> */



