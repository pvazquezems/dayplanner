//created a variable to hold the time, then append it on line 3 up to the jubotron.
var currentDay = moment().format('MMMM Do YYYY');
    $('#currentDay').append(currentDay);
    
// waiting for our document to load before we hit them with the query.
$(document).ready(()=>{

//kept it simple with two functions one that changes the color by hour and the other to save the text once button clicked.    
changeColor();
saveText();

function changeColor(){
    // had to find a way to get the hour be a value and in military time to be easier given the ID's i gave my rows.
    var currentHour = parseInt(moment().format('HH'));
    console.log(currentHour);
    // this function is what im referring to on line 16.  if its 1pm its 1300 but line 17 makes it (13) and the id for my row containg 1pm in the time block has an id of 13
    $(".input").each(function () {
        var rowHour = parseInt($(this).attr("id"));
        console.log(this);
        console.log(rowHour);
    
    //i made an if, else if and else statment to add and remove classes given to us in css based of the row id compared to the current hour. 
    if (rowHour > currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    } else if (rowHour < currentHour) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
    } else {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
    }
    });
};
// i made the click function for all the buttons on the page.
$(".saveBtn").on('click', function() {
    // here i get the value of the inputs fields 
    textVal = $(this).siblings(".input").val();
    console.log(textVal);
    //this is where i get the number value pertaining to the row the user decides to save on.
    hourVal = $(this).siblings(".hour").text();
    console.log(hourVal);
    //this is where we set our item into local storage. key to values.  it knows where to save it because of the parameters.
    //hourval would dictate the row and then the textvalue saved inside it knows which row because its listening to the click on the save btn for said row
    localStorage.setItem(hourVal, JSON.stringify(textVal));
    
})

//heres our function where we turn the string into an object
function saveText () {
    // i set a variable to hold the string that just got turned into an object. repeat for amount of rows. 
    var saveText9 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#9").val("");
    $("#9").val(saveText9);

    var saveText10 = JSON.parse(localStorage.getItem("10:00 am"));
    $("#10").val("");
    $("#10").val(saveText10);

    var saveText11 = JSON.parse(localStorage.getItem("11:00 am"));
    $("#11").val("");
    $("#11").val(saveText11);
    
    var saveText12 = JSON.parse(localStorage.getItem("12:00 am"));
    $("#12").val("");
    $("#12").val(saveText12);
    
    var saveText1 = JSON.parse(localStorage.getItem("1:00 pm"));
    $("#13").val("");
    $("#13").val(saveText1);
    
    var saveText2 = JSON.parse(localStorage.getItem("2:00 pm"));
    $("#14").val("");
    $("#14").val(saveText2);
    
    var saveText3 = JSON.parse(localStorage.getItem("3:00 pm"));
    $("#15").val("");
    $("#15").val(saveText3);
    
    var saveText4 = JSON.parse(localStorage.getItem("4:00 pm"));
    $("#16").val("");
    $("#16").val(saveText4);
    
    var saveText5 = JSON.parse(localStorage.getItem("5:00 pm"));
    $("#17").val("");
    $("#17").val(saveText5);
    
    var saveText6 = JSON.parse(localStorage.getItem("6:00 pm"));
    $("#18").val("");
    $("#18").val(saveText6);

     
}

});