//---------------------------------------------------------------------------
// VARIABLE DECLARATIONS!
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

}

function getMonthsWorked(UTCDate) {

}

function convertDatetoUTC(startDate) {

}

function convertDatefromUTC(UTCDate) {

}

//---------------------------------------------------------------------------
// DO STUFF!
$("#submit-button").on("click", function(event) {
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