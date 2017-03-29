//---------------------------------------------------------------------------
// VARIABLE DECLARATIONS!
var name = $("#name").val().trim();
var role = $("#role").val().trim();
var startDate = $("#start-date").val().trim();
var monthlyRate = $("#monthly-rate").val().trim();
var UTCDate = moment(new Date(startDate));

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD4OzijyxwS7AwrzydBG4HalHoBjwajV3c",
    authDomain: "timesheet-95d18.firebaseapp.com",
    databaseURL: "https://timesheet-95d18.firebaseio.com",
    storageBucket: "timesheet-95d18.appspot.com",
    messagingSenderId: "392702487619"
};
firebase.initializeApp(config);

var database = firebase.database();

//---------------------------------------------------------------------------
// FUNCTION DECLARATIONS!
function createRow() {

}

function getBill(rate) {
    var totalbill = rate * getMonthsWorked;
    return totalbill;
}

function getMonthsWorked(UTCDate) {
    var tsMonths = moment(UTCDate).diff(moment(), "months");
    return tsMonths
}


//---------------------------------------------------------------------------
// DO STUFF!
$("#submit-button").on("click", function(event) {
            event.preventDefault();
            createRow();

            database.ref().push({
                name: name,
                role: role,
                startDate: startDate,
                monthlyRate: monthlyRate,
                UTCDate: UTCDate

            });