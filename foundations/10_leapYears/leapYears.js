const leapYears = function(year) {
    const yearDivisibleByFour = year % 4 === 0;
    const yearDivisibleByFourHundred = year % 400 === 0;
    const isCentury = year % 100 === 0;

    if (yearDivisibleByFour && (!isCentury || yearDivisibleByFourHundred)) {
      return true;  
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
