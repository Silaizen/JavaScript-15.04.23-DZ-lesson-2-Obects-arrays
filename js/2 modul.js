 // 1 task
// const car = {
//     manufacturer: "Land Rover",
//     model: "Range Rover 2007",
//     year: 2023,
//     averageSpeed: 100,


//     displayInformation: function () {
//         console.log("Car:", this.manufacturer, this.model);
//         console.log("Year:", this.year);
//         console.log("Average Speed:", this.averageSpeed, "km/h");
//     },

//     calculateTime: function (distance) {
//         const breakAfter = 4;
//         const breakDuration = 1;

//         const travelTime = distance / this.averageSpeed;
//         const numberOfBreaks = Math.floor(travelTime / breakAfter);
//         const totalBreakTime = numberOfBreaks * breakDuration;
//         const totalTravelTime = travelTime + totalBreakTime;

//         console.log("Distance:", distance, "km");
//         console.log("Total travel time:", totalTravelTime.toFixed(2), "hours");
//         console.log("Number of breaks:", numberOfBreaks);
//         console.log("Total break time:", totalBreakTime, "hours");
//     }
// };


// car.displayInformation();


// car.calculateTime(800);


//2 task
// const Fraction = {
//     numerator: 0,
//     denominator: 1,
  
//     add: function(fraction) {
//       const result = {};
//       result.numerator = this.numerator * fraction.denominator + fraction.numerator * this.denominator;
//       result.denominator = this.denominator * fraction.denominator;
//       return result;
//     },
  
//     subtract: function(fraction) {
//       const result = {};
//       result.numerator = this.numerator * fraction.denominator - fraction.numerator * this.denominator;
//       result.denominator = this.denominator * fraction.denominator;
//       return result;
//     },
  
//     multiply: function(fraction) {
//       const result = {};
//       result.numerator = this.numerator * fraction.numerator;
//       result.denominator = this.denominator * fraction.denominator;
//       return result;
//     },
  
//     divide: function(fraction) {
//       const result = {};
//       result.numerator = this.numerator * fraction.denominator;
//       result.denominator = this.denominator * fraction.numerator;
//       return result;
//     },
  
//     simplify: function() {
//       const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
//       const divisor = gcd(this.numerator, this.denominator);
//       this.numerator /= divisor;
//       this.denominator /= divisor;
//     }
//   };
  
  
//   const fraction1 = Object.create(Fraction);
//   fraction1.numerator = 1;
//   fraction1.denominator = 2;
  
//   const fraction2 = Object.create(Fraction);
//   fraction2.numerator = 3;
//   fraction2.denominator = 4;
  
//   const sum = fraction1.add(fraction2);
//   console.log("Addition:", sum.numerator + "/" + sum.denominator);
  
//   const difference = fraction1.subtract(fraction2);
//   console.log("Subtraction:", difference.numerator + "/" + difference.denominator);
  
//   const product = fraction1.multiply(fraction2);
//   console.log("Multiplication:", product.numerator + "/" + product.denominator);
  
//   const quotient = fraction1.divide(fraction2);
//   console.log("Division:", quotient.numerator + "/" + quotient.denominator);
  
//   fraction1.simplify();
//   console.log("Simplification of fraction1:", fraction1.numerator + "/" + fraction1.denominator);


  //3
  const time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  
    displayTime: function () {
      const formattedTime = `${this.hours.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`;
      console.log(formattedTime);
    },
  
    changeSeconds: function (seconds) {
      this.seconds += seconds;
      this.adjustTime();
    },
  
    changeMinutes: function (minutes) {
      this.minutes += minutes;
      this.adjustTime();
    },
  
    changeHours: function (hours) {
      this.hours += hours;
      this.adjustTime();
    },
  
    adjustTime: function () {
      if (this.seconds >= 60) {
        const extraMinutes = Math.floor(this.seconds / 60);
        this.seconds %= 60;
        this.minutes += extraMinutes;
      }
  
      if (this.minutes >= 60) {
        const extraHours = Math.floor(this.minutes / 60);
        this.minutes %= 60;
        this.hours += extraHours;
      }
  
      if (this.hours >= 24) {
        this.hours %= 24;
      }
    }
  };
  
  
  time.displayTime(); 
  
  time.changeSeconds(120);
  time.displayTime(); 
  
  time.changeMinutes(60);
  time.displayTime(); 
  
  time.changeHours(0);
  time.displayTime(); 