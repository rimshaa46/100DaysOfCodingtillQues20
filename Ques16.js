// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
var guestts = ["Muhammad Ali Jinah", "Abdul Qadeer Khan", "Abdul Sattar"];
console.log("Great news ! I found a bigger dinner table!");
//Adding more guests 
guestts.unshift("issac newton");
guestts.splice(guestts.length / 2, 0, "charles darwin");
guestts.push("Ada Lovelace");
guestts.forEach(function (guests) {
    console.log("Dear ".concat(guests, " would you like to join me for dinner ? "));
});
//Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
console.log("unfortunately I can only invite only 2 people for dinner.");
while (guestts.length > 2) {
    var removedguests = guestts.pop();
    console.log("Sorry ".concat(removedguests, " I can't invite you to dinner"));
}
;
guestts.forEach(function (guestts) { return console.log("Dear ".concat(guestts, " you are still invited to Dinner.")); });
//show empty guests list
guestts.splice(0, guestts.length);
console.log(guestts);
