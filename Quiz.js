function start() {
    let strt = document.getElementById("quizForm");
    strt.style.display = "block";                     // Show quiz to the user.
    document.getElementById("btn").disabled = true;   // Button will disable after 1st click.
}

function timeDiv() {
    let tm = document.getElementById("myDiv");
    tm.style.display = "block";
}

let timeRemain = 60;
let myTimer = 0;

function timer() {
    myTimer = setInterval(function(){
        timeRemain -= 1;
        document.getElementById("time").innerHTML = timeRemain;        
    }, 1000);
}

let score = 0;
let resultArray = [];

// Get selected radio button value from a radio array.
function getRadioValue (radioArray) {
    for (let i = 0; i < radioArray.length; i++) {
        if (radioArray[i].checked) {
            return radioArray[i].value;
        }
    }
    return "";
}

function results() {
    // check => if selectedValues(document.nameOfTheForm.nameOfTheInput) is equal to correct answer's value.
    // Q1
    if (getRadioValue(document.quiz.q1) == 2) {
        score = score + 2;
        resultArray[0] = "Correct";
    }
    else {
        score = score -1;
        resultArray[0] = "Incorrect";
    }
    // Q2
    if (getRadioValue(document.quiz.q2) == 3) {
        score = score + 2;
        resultArray[1] = "Correct";
    }
    else {
        score = score -1;
        resultArray[1] = "Incorrect";
    }
    // Q3
    if (getRadioValue(document.quiz.q3) == 1) {
        score = score + 2;
        resultArray[2] = "Correct";
    }
    else {
        score = score -1;
        resultArray[2] = "Incorrect";
    }
    // Q4
    if (getRadioValue(document.quiz.q4) == 3) {
        score = score + 2;
        resultArray[3] = "Correct";
    }
    else {
        score = score -1;
        resultArray[3] = "Incorrect";
    }
    // Q5
    if (getRadioValue(document.quiz.q5) == 4) {
        score = score + 2;
        resultArray[4] = "Correct";
    }
    else {
        score = score -1;
        resultArray[4] = "Incorrect";
    }
    // Q6
    if (getRadioValue(document.quiz.q6) == 2) {
        score = score + 2;
        resultArray[5] = "Correct";
    }
    else {
        score = score -1;
        resultArray[5] = "Incorrect";
    }
    // Q7
    if (getRadioValue(document.quiz.q7) == 1) {
        score = score + 2;
        resultArray[6] = "Correct";
    }
    else {
        score = score -1;
        resultArray[6] = "Incorrect";
    }
    // Q8
    if (getRadioValue(document.quiz.q8) == 3) {
        score = score + 2;
        resultArray[7] = "Correct";
    }
    else {
        score = score -1;
        resultArray[7] = "Incorrect";
    }
    // Q9
    if (getRadioValue(document.quiz.q9) == 2) {
        score = score + 2;
        resultArray[8] = "Correct";
    }
    else {
        score = score -1;
        resultArray[8] = "Incorrect";
    }
    // Q10
    if (getRadioValue(document.quiz.q10) == 2) {
        score = score + 2;
        resultArray[9] = "Correct";
    }
    else {
        score = score -1;
        resultArray[9] = "Incorrect";
    }

    // Score
    if (score < 0) {
        score = 0;
    }
    showScore();
    colorChange();
    document.getElementById("btn2").disabled = true; // Button will disable after 1st click.
}

let text = "";

function showScore() {
    for (let i = 0; i < resultArray.length; i++) {
        text = text +"Question "+(i+1)+" : "+ resultArray[i] + " Answer" + "<br>";
    }
    
    let yourScore = "You have scored : " + score;
    let yourTime = "Your time : " + (60-timeRemain);

    let fnl = document.getElementById("final");
    fnl.style.display = "block";

    document.getElementById("finalResult").innerHTML = "<br>" + text +"<br>"+ yourScore +" Points <br>"+ yourTime +" Seconds <br><br>";
}

function colorChange() {
    document.getElementById("marksColor").style.backgroundImage = "none";
    if (score >= 15) {
        document.getElementById("marksColor").style.backgroundColor = "green";
    }
    else if (score >= 10) {
        document.getElementById("marksColor").style.backgroundColor = "yellow";
    }
    else if (score >= 5) {
        document.getElementById("marksColor").style.backgroundColor = "orange";
    }
    else {
        document.getElementById("marksColor").style.backgroundColor = "red";
    }
}

function stopTimer() {
    clearInterval(myTimer);
    clearTimeout(myTimeOut);

}

let myTimeOut;
function timeOut () {
    myTimeOut = setTimeout(function() {
        stopTimer();
        alert("Time's Up! Click 'OK' to check your Result.");
        window.location.hash = "finalResult"; // Jump to the 'finalResult' div.
        results();
    }, 60000 );
}
