const { time } = require("console");

//question one
function deliveryType(days) {
    days.forEach(day => {
        switch (day) {
            case "Monday":
                console.log("Deliver fruits")
                break;
            case "Tuesday":
                console.log("Deliver vegetables");
                break;
            case "Wednesday":
                console.log("Deliver pets");
                break;
            case "Thursday":
                console.log("Deliver soft drinks");
                break;
            case "Friday":
                console.log("Deliver animals");
                break;
            default:
                console.log("Unknown delivery type")
                break;
        }
    })
}
deliveryType(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]);



//question two
function bookAvailability(bookStatuses) {
    for (let i = 0; i < bookStatuses.length; i++) {
        if (bookStatuses[i] === "available") {
            console.log("Ready to lend");
        }
        else if (bookStatuses[i] === "borrowed") {
            console.log("Checked out");
        }
        else {
            console.log("Book status unknown");
        }
    }
}
bookAvailability(["available", "stolen", "borrowed"]);



//question three
function ageGroups(customerAges) {
    for (let i = 0; i < customerAges.length; i++) {
        if (customerAges[i] >= 18) {
            console.log("Adult");
        }
        else {
            console.log("Minor");
        }
    }
}
ageGroups([10, 15, 20, 52, 78, 4, 10, 30]);




//question four
function quizCountdown(X){
    while(X>0){
        console.log(`You have ${X} lives left`);
        X--;
    }
    console.log("End!")
}
quizCountdown(5);




//question five
function printUserFeedback(userFeedback) {
    let i = 0;
    do {
        console.log(`${userFeedback[i]}`);
        i++;
    }
    while (i < userFeedback.length);
}
printUserFeedback(["I like the app", "Improve your app", "Takes long to load", "Too many ads"])




//question six
function loginDirectionMessage(loginStatuses) {
    for (let i = 0; i < loginStatuses.length; i++) {
        if (loginStatuses[i] === "logged in") {
            console.log("Welcome back!");
        }
        else {
            console.log("Please log in");
        }
    }
}
loginDirectionMessage(["logged in", "unloggedin"]);



//question seven
function servicePriority(suportTicketPriorities) {
    suportTicketPriorities.forEach(suportTicketPriority => {
        switch (suportTicketPriority) {
            case "low":
                console.log("Can wait");
                break;
            case "medium":
                console.log("Quick service");
                break;
            case "high":
                console.log("Urgent service");
                break;
            default:
                console.log("Unknown status");
                break;
        }
    })
}
servicePriority(["high", "low", "medium", "not very high"])




//question eight


// function quizCountdown() {
//     let quizTime = 10;
//     while (quizTime > 0) {
//         console.log(`${quizTime}`);
//         quizTime--;
//     }
//     console.log("4jre")
// }
// quizCountdown();


function quizCountdown(quizTime){
    while(quizTime>0){
        console.log(`${quizTime}`);
        quizTime--;
    }
    console.log("End of Quiz!")
}
quizCountdown(10);