// access html elements (input fields)

let username = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phoneNumber");
let subject = document.getElementById("subject");
let textArea = document.getElementById("textArea");

// dunction start when user click view query button

function buttonClick() {
    
    // user input validation
    if (username.value=="") {
        alert("please enter your name!!");
        return false;
    }else if (email.value=="") {
        alert("please enter your email address!!");
        return false;
    }else if (phone.value == "") {
        alert("please enter your phone number!!");
        return false;
    }else if (subject.value == "Subject") {
        alert("please select any subject!!");
        return false;
    }else if (textArea.value == "") {
        alert("please provide a summary of your query!!");
        return false;
    }else{
        // changing css 
        document.getElementById("enter-details").style.display = "none";
        document.getElementById("summary-div").style.display = "block";

        // passing values to display summary
        let filledName = document.getElementById("summary-name");
        let filledEmail = document.getElementById("summary-email");
        let filledPhone = document.getElementById("summary-phone");
        let filledSubject = document.getElementById("summary-subject");
        let filledQuery = document.getElementById("summary-query");

        filledName.innerHTML = username.value;
        filledEmail.innerHTML = email.value;
        filledPhone.innerHTML = phone.value;
        filledSubject.innerHTML = subject.value;
        filledQuery.innerHTML = textArea.value;
    }
}

// function to edit details
function editDetails() {
    document.getElementById("enter-details").style.display = "block";
    document.getElementById("summary-div").style.display = "none";
}

// function to submit 
function submit() {
    document.getElementById("enter-details").style.display = "block";
    document.getElementById("summary-div").style.display = "none";
    alert("query sent successfully");
    // clear all the input fields
    username.value = "";
    email.value = "";
    phone.value = "";
    subject.value = "subject";
    textArea.value = "";
}

