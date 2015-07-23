module.exports = Zeller;

function Zeller(Month, Day, Year) {
	// var h = day of the week
	// var q = day of the month
	// var m = month
	// var K = year of the century
	// var J = zero-based century
	// var day = configuration problem

	var h = (q+[13(m+1)/5]+K+[K/4]+[J/4]+5(J)) % 7;
}