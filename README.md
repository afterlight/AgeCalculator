AgeCalculator
=============

Age Calculator script. Totally lame, but I couldn't find something decent anywhere else.


## Methods

### new Age(date1, date2)

`date1` is the starting date to measure the age from

`date2` is the optional second date to measure the age to. Defaults to the current date.


### Age.getYears()
Returns the absolute number of years

### Age.getMonths()
Returns the number of months into the current year as a fraction

### Age.getAge()
Returns an object containing the years and months

e.g.

	{
		years: 10,
		months: 3.4
	}


## Examples
New age object

	var dateOfBirth = new Date(1982, 9, 1);

	var age = new Age(dateOfBirth); 

	
	age.getYears();   // => 30
	age.getMonths();  // => 7.9

	//get the age in an object
	var theAge = age.getAge(); // => { years: 30, months: 7.9 }
	
	theAge.years   // same as getYears()
	theAge.months  // same as getMonths()


