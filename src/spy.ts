function Numbers() {
    this.number = "One";

    this.nextNumber = function() {
        this.number = "Two";
        return this.number;
    },

    this.getNextNum = function() {
        return this.nextNumber();
    }
}