class GuessingGame {
    constructor() { }
    
    setRange(min, max) {
            this.min=min;
            this.max=max;
    }

    guess() {
        this.sum=this.max+this.min;
        this.result =Math.round(this.sum/2);
        return Math.round(this.result);
    }

    lower() {
      return this.max=this.result;
    }

    greater() {
        return this.min=this.result;
    }
}

module.exports = GuessingGame;
