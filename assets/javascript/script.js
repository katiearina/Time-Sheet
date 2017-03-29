//---------------------------------------------------------------------------
// VARIABLE DECLARATIONS!
<<<<<<< HEAD
	var name = "";
	var role = "";
	var startDate = "";
	var monthlyRate = "";
	var UTCDate = "";



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

function getBill(rate, months) {
=======
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
>>>>>>> e144bfb462456c61b60668f9158face1b0d9bd4b

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
<<<<<<< HEAD
    event.preventDefault();
    name = $("#name").val().trim();
	role = $("#role").val().trim();
	startDate = $("#start-date").val().trim();
	monthlyRate = $("#monthly-rate").val().trim();
	UTCDate = "";
console.log(name);
	database.ref().push({
		name: name,
		role: role,
		startDate: startDate,
		monthlyRate: monthlyRate,
		UTCDate: UTCDate
    });

});

database.ref().on("child_added", function(childSnapshot){

	console.log(childSnapshot.val());
	$("#currentEmployees").append("<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().role + "</td><td>" + childSnapshot.val().startDate + "</td><td>" + childSnapshot.val().monthlyRate + "</td><td>" + childSnapshot.val().UTCDate + "</td>")
}) //end of child added listener
=======
            event.preventDefault();
            createRow();

            database.ref().push({
                name: name,
                role: role,
                startDate: startDate,
                monthlyRate: monthlyRate,
                UTCDate: UTCDate

            });
>>>>>>> e144bfb462456c61b60668f9158face1b0d9bd4b
