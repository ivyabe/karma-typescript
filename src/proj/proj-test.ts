export class Manager {

    private display: any;

    public startDisplay() {
        console.log("startDisplay()");
        if ( this.display == null) {
            return "NG";
        } else {
            return "OK";
        }
    }
	
	public getPageDataKindId() {
        console.log("getPageDataKindId()");
        return this.startDisplay();
    }
}

export const manage = new Manager();
// window.manage = manage;