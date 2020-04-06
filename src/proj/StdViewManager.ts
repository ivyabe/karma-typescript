declare class ClientCommon {
    /** dialogResult object */
    public dialogResult: any;
    /** getPermissions() function of client-common.js */
    public getPermissions(permission: string): boolean;
    /** openHelp() function of client-common.js */
    public openHelp(resultCode: string): any;
    /** createDialog() function of client-common.js */
    public createDialog(resultCode: string, errorCode: string, message: string, dialogType: number,
        dialogTitle: string, dialogResultCallback: any, dialogCloseCallback: any): any;
    /** showDialog() function of client-common.js */
    public showDialog(errCode: string, errId: string, errMessage: string, dialogType: number): void;
    /** getUnmsServerUrl function of clientCommon */
    public getUnmsServerUrl(url: string): string;

    public removeLockActionContainUrl(urlKey:string): void;
    /** closes all dialog */
    public closeAllDialog(): void;

    public getExportPollingInterval(): number;
    public getMaxExportPollCount(): number;
}

class StdViewManager {
    private display: any;
    public startDisplay() {
        if (this.display == null) {
            return "NG";
        }
        else {
            return "OK";
        }
    }
    public getPageDataKindId(): string {
        return "1";
    }
}

// export const managr = new StdViewManager();
// window.managr = managr;
// module.exports = StdViewManager;