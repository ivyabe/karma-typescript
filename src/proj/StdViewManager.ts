export class StdViewManager {
    constructor() {}
    private display: any;
    public startDisplay() {
        console.log("startDisplay()");
        if (this.display == null) {
            return "NG";
        }
        else {
            return "OK";
        }
    }
    public getPageDataKindId() {
        console.log("getPageDataKindId()");
        return this.startDisplay();
    }
}

export const managr = new StdViewManager();
window.managr = managr;
module.exports = StdViewManager;