//Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestsss = ["Muhammad Ali Jinah", "Abdul Qadeer Khan", "Abdul Sattar"];
guestsss.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
//Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
var unableToAttend = ["Abdul Qadeer Khan"];
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "Imran Khan";
var index = guestsss.indexOf(unableToAttend[0]);
if (index !== -1) {
    guestsss[index] = newGuest;
}
// New invitations
guestsss.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
