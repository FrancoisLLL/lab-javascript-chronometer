class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    
    this.intervalId = setInterval(() => {
      if (callback !== undefined)
      {
        callback();
      }
      this.currentTime += 10;
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / (60 * 1000)) % 60;
  }

  getSeconds() {
    return Math.floor((this.currentTime /1000 ) % 60);
  }

  getMilliSeconds() {
    return Math.floor((this.currentTime % 1000) / 10) ;
  }

  computeTwoDigitNumber(value) {
    if(value < 10) {
      return "0" + value.toString();
    }
    else {
      return value.toString();
    }
  }


  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) 
    + ':' + this.computeTwoDigitNumber(this.getSeconds()) 
    + ':' + this.computeTwoDigitNumber(this.getMilliSeconds());
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

