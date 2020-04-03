function AreNumbers() {
    this.number = "One";

    this.nextNumber = function() {
        this.number = "Two";
        return this.number;
    },

    this.getNextNum = function() {
        return this.nextNumber();
    },

    this.getRandomNum = function(r) {
        return Math.random() * r;
    }
}