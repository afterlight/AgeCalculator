/**
 * Helper to find the age of a date based on a start date and an end date
 *
 * @param {Date} date1
 * @param {Date} [date2] If not passed the current date will be used.
 * @constructor
 */
function Age(date1, date2){
	this.date1 = date1;
	this.date2 = date2 || new Date();
	this.age = 0;

	/**
	 * Get the number of years between the 2 dates
	 *
	 * return {Number}
	 */
	this.getYears = function getYears() {
		return Math.floor(this.age);
	};

	/**
	 * Get the number of months past the difference in years between the two dates.
	 * e.g. If the difference is 18 months then this will return 6.0
	 *
	 * return {Number}
	 */
	this.getMonths = function getMonths() {
		// Take the absolute age in years and use the remainder
		// to figure out how many months into that year we are.
		return Math.floor((this.age - this.getYears()) * 12 *10)/10
	};

	/**
	 * Get the age between the two dates expressed as an object containing the years and months
	 *
	 * @returns {{years: {Number}, months: {Number}}}
	 */
	this.getAge = function getAge() {
		return { years: this.getYears(), months: this.getMonths() };
	};

	/**
	 * Calculate the difference between the two dates and return them
	 * as a fraction expression of years
	 */
	this.setAge = function setAge() {
		var diff;
		diff = this.date2.getTime() - this.date1.getTime();
		this.age = diff / (1000 * 60 * 60 * 24 * 365.25);
	};

	/**
	 * Initialise
	 */
	this.init = function init() {
		this.setAge();
	};

	this.init();
}
