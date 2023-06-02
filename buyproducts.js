const cricketbatprice = 8000;
const cricketballprice = 500;
const football = 6000;
const footballboots = 4500;
const badminton = 7000;
const shuttlecock = 400;
var total=0;
var quantity;
var q1 = 0;
var q2 = 0;
var q3 = 0;
var q4 = 0;
var q5 = 0;
var q6 = 0;
var name1;
var name2;
var shipemail;





function validate() {
    if (document.validateform.firstname.value.length == 0)
        return newFunction();

    if (document.validateform.secondname.value.length == 0)
        return newFunction_1();

    if (document.validateform.email.value.length == 0)
        return newFunction_2();

    function newFunction_2() {
        {
            alert("Mandatory field 'Email Address' is empty!");
            return;
        }
    }

    function newFunction_1() {
        {
            alert("Mandatory field 'Second Name' is empty!");
            return;
        }
    }

    function newFunction() {
        {
            alert("Mandatory field 'First Name' is empty!");
            return;
        }
    }

    let name1 = document.getElementById("firstname").value;
    let name2 = document.getElementById("secondname").value;
    let shipemail = document.getElementById("email").value;
    document.write("Name : ")
    document.write(name1);
    document.write(" ");
    document.write(name2);
    document.write("<br/>");
    document.write("Email Address : ");
    document.write(shipemail);
    document.write("<hr/>");
    document.write("Invoice Details")
    document.write("<br/>");
    document.write("<br/>");

    if(q1!=0){
        document.write("Product Details : Cricket Bat");
        document.write("<br/>");
        document.write("Quantity : ");
        document.write(q1);
        document.write("<br/>");
        document.write("Price : LKR ");
        document.write(q1*8000);
        document.write(".00");
        document.write("<br/>");
        document.write("<br/>");
        //total=total + (q1*8000);

    }

    if(q2!=0){
        document.write("Product Details : Cricket Ball (Leather)");
        document.write("<br/>");
        document.write("Quantity : ");
        document.write(q2);
        document.write("<br/>");
        document.write("Price : LKR ");
        document.write(q2*500);
        document.write(".00");
        document.write("<br/>");
        document.write("<br/>");
        //total=total + (q2*500);

    }

    if(q3!=0){
        document.write("Product Details : Football");
        document.write("<br/>");
        document.write("Quantity : ");
        document.write(q3);
        document.write("<br/>");
        document.write("Price : LKR ");
        document.write(q3*6000);
        document.write(".00");
        document.write("<br/>");
        document.write("<br/>");
        //total=total + (q3*6000);

    }

    if(q4!=0){
        document.write("Product Details : Football Boots");
        document.write("<br/>");
        document.write("Quantity : ");
        document.write(q4);
        document.write("<br/>");
        document.write("Price : LKR ");
        document.write(q4*4500);
        document.write(".00");
        document.write("<br/>");
        document.write("<br/>");
        //total=total + (q4*4500);

    }

    if(q5!=0){
        document.write("Product Details : Badminton Racquet");
        document.write("<br/>");
        document.write("Quantity : ");
        document.write(q5);
        document.write("<br/>");
        document.write("Price : LKR ");
        document.write(q5*7000);
        document.write(".00");
        document.write("<br/>");
        document.write("<br/>");
        //total=total + (q5*7000);

    }

    if(q6!=0){
        document.write("Product Details : Shuttle Cock");
        document.write("<br/>");
        document.write("Quantity : ");
        document.write(q6);
        document.write("<br/>");
        document.write("Price : LKR ");
        document.write(q6*400);
        document.write(".00");
        document.write("<br/>");
        document.write("<br/>");
        //total=total + (q6*400);

    }

    document.write("<br/>");
    document.write("Total : LKR ");
    document.write(total);
    document.write(".00");
}


//Select 1 cricket bat entry

function select1() {

    if (document.getElementById("quantity1").value == "0") {
        window.alert("Invalid Entry!");
        return;
    }

    document.getElementById("invoiceadd1").setAttribute('disabled', 'disabled');

    if (document.getElementById("quantity1").value == "1") {
        window.alert("1 cricket bat added to invoice. Total price is LKR 8000.00");
        total = total + 8000;
        q1 = 1;
    }

    if (document.getElementById("quantity1").value == "2") {
        window.alert("2 cricket bats added to invoice. Total price is LKR 16000.00");
        total = total + (16000);
        q1 = 2;
    }

    if (document.getElementById("quantity1").value == "3") {
        window.alert("3 cricket bats added to invoice. Total price is LKR 24000.00");
        total = total + 24000;
        q1 = 3;
    }

    if (document.getElementById("quantity1").value == "4") {
        window.alert("4 cricket bats added to invoice. Total price is LKR 32000.00");
        total = total + 32000;
        q1 = 4;
    }

    if (document.getElementById("quantity1").value == "5") {
        window.alert("5 cricket bats added to invoice. Total price is LKR 40000.00");
        total = total + 40000;
        q1 = 5;
    }

    if (document.getElementById("quantity1").value == "6") {
        window.alert("6 cricket bats added to invoice. Total price is LKR 48000.00");
        total = total + 48000;
        q1 = 6;
    }

    if (document.getElementById("quantity1").value == "7") {
        window.alert("7 cricket bats added to invoice. Total price is LKR 56000.00");
        total = total + 56000;
        q1 = 7;
    }

    if (document.getElementById("quantity1").value == "8") {
        window.alert("8 cricket bats added to invoice. Total price is LKR 64000.00");
        total = total + 64000;
        q1 = 8;
    }

    if (document.getElementById("quantity1").value == "9") {
        window.alert("9 cricket bats added to invoice. Total price is LKR 72000.00");
        total = total + 72000;
        q1 = 9;
    }

}

// select 2 cricket ball entry

function select2() {

    if (document.getElementById("quantity2").value == "0") {
        window.alert("Invalid Entry!");
        return;
    }

    document.getElementById("invoiceadd2").setAttribute('disabled', 'disabled');

    if (document.getElementById("quantity2").value == "1") {
        window.alert("1 cricket ball (leather) added to invoice. Total price is LKR 500.00");
        total = total + 500;
        q2 = 1;
    }

    if (document.getElementById("quantity2").value == "2") {
        window.alert("2 cricket balls (leather) added to invoice. Total price is LKR 1000.00");
        total = total + (1000);
        q2 = 2;
    }

    if (document.getElementById("quantity2").value == "3") {
        window.alert("3 cricket balls (leather) added to invoice. Total price is LKR 1500.00");
        total = total + 1500;
        q2 = 3;
    }

    if (document.getElementById("quantity2").value == "4") {
        window.alert("4 cricket balls (leather) added to invoice. Total price is LKR 2000.00");
        total = total + 2000;
        q2 = 4;
    }

    if (document.getElementById("quantity2").value == "5") {
        window.alert("5 cricket balls (leather) added to invoice. Total price is LKR 2500.00");
        total = total + 2500;
        q2 = 5;
    }

    if (document.getElementById("quantity2").value == "6") {
        window.alert("6 cricket balls (leather) added to invoice. Total price is LKR 3000.00");
        total = total + 3000;
        q2 = 6;
    }

    if (document.getElementById("quantity2").value == "7") {
        window.alert("7 cricket balls (leather) added to invoice. Total price is LKR 3500.00");
        total = total + 3500;
        q2 = 7;
    }

    if (document.getElementById("quantity2").value == "8") {
        window.alert("8 cricket balls (leather) added to invoice. Total price is LKR 4000.00");
        total = total + 4000;
        q2 = 8;
    }

    if (document.getElementById("quantity2").value == "9") {
        window.alert("9 cricket balls (leather) added to invoice. Total price is LKR 4500.00");
        total = total + 4500;
        q2 = 9;
    }

}

// select 3 football entry

function select3() {

    if (document.getElementById("quantity3").value == "0") {
        window.alert("Invalid Entry!");
        return;
    }

    document.getElementById("invoiceadd3").setAttribute('disabled', 'disabled');

    if (document.getElementById("quantity3").value == "1") {
        window.alert("1 football added to invoice. Total price is LKR 6000.00");
        total = total + 6000;
        q3 = 1;
    }

    if (document.getElementById("quantity3").value == "2") {
        window.alert("2 footballs added to invoice. Total price is LKR 12000.00");
        total = total + (12000);
        q3 = 2;
    }

    if (document.getElementById("quantity3").value == "3") {
        window.alert("3 footballs added to invoice. Total price is LKR 18000.00");
        total = total + 18000;
        q3 = 3;
    }

    if (document.getElementById("quantity3").value == "4") {
        window.alert("4 footballs added to invoice. Total price is LKR 24000.00");
        total = total + 24000;
        q3 = 4;
    }

    if (document.getElementById("quantity3").value == "5") {
        window.alert("5 footballs added to invoice. Total price is LKR 30000.00");
        total = total + 30000;
        q3 = 5;
    }

    if (document.getElementById("quantity3").value == "6") {
        window.alert("6 footballs added to invoice. Total price is LKR 36000.00");
        total = total + 36000;
        q3 = 6;
    }

    if (document.getElementById("quantity3").value == "7") {
        window.alert("7 footballs added to invoice. Total price is LKR 42000.00");
        total = total + 42000;
        q3 = 7;
    }

    if (document.getElementById("quantity3").value == "8") {
        window.alert("8 footballs added to invoice. Total price is LKR 48000.00");
        total = total + 48000;
        q3 = 8;
    }

    if (document.getElementById("quantity3").value == "9") {
        window.alert("9 footballs added to invoice. Total price is LKR 54000.00");
        total = total + 54000;
        q3 = 9;
    }

}

// select 4 football boots entry

function select4() {

    if (document.getElementById("quantity4").value == "0") {
        window.alert("Invalid Entry!");
        return;
    }

    document.getElementById("invoiceadd4").setAttribute('disabled', 'disabled');

    if (document.getElementById("quantity4").value == "1") {
        window.alert("1 pair of football boots added to invoice. Total price is LKR 4500.00");
        total = total + 4500;
        q4 = 1;
    }

    if (document.getElementById("quantity4").value == "2") {
        window.alert("2 pairs of football boots added to invoice. Total price is LKR 9000.00");
        total = total + (9000);
        q4 = 2;
    }

    if (document.getElementById("quantity4").value == "3") {
        window.alert("3 pairs of football boots added to invoice. Total price is LKR 13500.00");
        total = total + 13500;
        q4 = 3;
    }

    if (document.getElementById("quantity4").value == "4") {
        window.alert("4 pairs of football boots added to invoice. Total price is LKR 18000.00");
        total = total + 18000;
        q4 = 4;
    }

    if (document.getElementById("quantity4").value == "5") {
        window.alert("5 pairs of football boots added to invoice. Total price is LKR 22500.00");
        total = total + 22500;
        q4 = 5;
    }

    if (document.getElementById("quantity4").value == "6") {
        window.alert("6 pairs of football boots added to invoice. Total price is LKR 27000.00");
        total = total + 27000;
        q4 = 6;
    }

    if (document.getElementById("quantity4").value == "7") {
        window.alert("7 pairs of football boots added to invoice. Total price is LKR 31500.00");
        total = total + 31500;
        q4 = 7;
    }

    if (document.getElementById("quantity4").value == "8") {
        window.alert("8 pairs of football boots added to invoice. Total price is LKR 36000.00");
        total = total + 36000;
        q4 = 8;
    }

    if (document.getElementById("quantity4").value == "9") {
        window.alert("9 pairs of football boots added to invoice. Total price is LKR 41500.00");
        total = total + 41500;
        q4 = 9;
    }

}

// select 5 badminton racquet entry 

function select5() {

    if (document.getElementById("quantity5").value == "0") {
        window.alert("Invalid Entry!");
        return;
    }

    document.getElementById("invoiceadd5").setAttribute('disabled', 'disabled');

    if (document.getElementById("quantity5").value == "1") {
        window.alert("1 badminton racquet added to invoice. Total price is LKR 7000.00");
        total = total + 7000;
        q5 = 1;
    }

    if (document.getElementById("quantity5").value == "2") {
        window.alert("2 badminton racquets added to invoice. Total price is LKR 14000.00");
        total = total + (14000);
        q5 = 2;
    }

    if (document.getElementById("quantity5").value == "3") {
        window.alert("3 badminton racquets added to invoice. Total price is LKR 21000.00");
        total = total + 21000;
        q5 = 3;
    }

    if (document.getElementById("quantity5").value == "4") {
        window.alert("4 badminton racquets added to invoice. Total price is LKR 28000.00");
        total = total + 28000;
        q5 = 4;
    }

    if (document.getElementById("quantity5").value == "5") {
        window.alert("5 badminton racquets added to invoice. Total price is LKR 35000.00");
        total = total + 35000;
        q5 = 5;
    }

    if (document.getElementById("quantity5").value == "6") {
        window.alert("6 badminton racquets added to invoice. Total price is LKR 42000.00");
        total = total + 42000;
        q5 = 6;
    }

    if (document.getElementById("quantity5").value == "7") {
        window.alert("7 badminton racquets added to invoice. Total price is LKR 49000.00");
        total = total + 49000;
        q5 = 7;
    }

    if (document.getElementById("quantity5").value == "8") {
        window.alert("8 badminton racquets added to invoice. Total price is LKR 56000.00");
        total = total + 56000;
        q5 = 8;
    }

    if (document.getElementById("quantity5").value == "9") {
        window.alert("9 badminton racquets added to invoice. Total price is LKR 63000.00");
        total = total + 63000;
        q5 = 9;
    }
}

// select 6 shuttle cock entry

function select6() {

    if (document.getElementById("quantity6").value == "0") {
        window.alert("Invalid Entry!");
        return;
    }

    document.getElementById("invoiceadd6").setAttribute('disabled', 'disabled');

    if (document.getElementById("quantity6").value == "1") {
        window.alert("1 shuttle cock added to invoice. Total price is LKR 400.00");
        total = total + 400;
        q6 = 1;
    }

    if (document.getElementById("quantity6").value == "2") {
        window.alert("2 shuttle cocks added to invoice. Total price is LKR 800.00");
        total = total + (800);
        q6 = 2;
    }

    if (document.getElementById("quantity6").value == "3") {
        window.alert("3 shuttle cocks added to invoice. Total price is LKR 12000.00");
        total = total + 12000;
        q6 = 3;
    }

    if (document.getElementById("quantity6").value == "4") {
        window.alert("4 shuttle cocks added to invoice. Total price is LKR 16000.00");
        total = total + 16000;
        q6 = 4;
    }

    if (document.getElementById("quantity6").value == "5") {
        window.alert("5 shuttle cocks added to invoice. Total price is LKR 20000.00");
        total = total + 20000;
        q6 = 5;
    }

    if (document.getElementById("quantity6").value == "6") {
        window.alert("6 shuttle cocks added to invoice. Total price is LKR 24000.00");
        total = total + 24000;
        q6 = 6;
    }

    if (document.getElementById("quantity6").value == "7") {
        window.alert("7 shuttle cocks added to invoice. Total price is LKR 28000.00");
        total = total + 28000;
        q6 = 7;
    }

    if (document.getElementById("quantity6").value == "8") {
        window.alert("8 shuttle cocks added to invoice. Total price is LKR 32000.00");
        total = total + 32000;
        q6 = 8;
    }

    if (document.getElementById("quantity6").value == "9") {
        window.alert("9 shuttle cocks added to invoice. Total price is LKR 36000.00");
        total = total + 36000;
        q6 = 9;
    }
}


