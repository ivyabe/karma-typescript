console.log("ClientCommon");
declare class ClientCommon {
    public dialogResult: any;
    public getPermissions(permission: string): boolean;
    public openHelp(resultCode: string): any;
    public createDialog(resultCode: string, errorCode: string, message: string, dialogType: number,
        dialogTitle: string, dialogResultCallback: any, dialogCloseCallback: any): any;
    public showDialog(errCode: string, errId: string, errMessage: string, dialogType: number): void;
    public getUnmsServerUrl(url: string): string;
    public removeLockActionContainUrl(urlKey:string): void;
    public closeAllDialog(): void;
    public getExportPollingInterval(): number;
    public getMaxExportPollCount(): number;
}

/** clientCommon */
declare let clientCommon: ClientCommon;

console.log("StdViewManager");
export class StdViewManager {
    private display: any;
    public startDisplay() {
        if (this.display == null) {
            clientCommon.closeAllDialog();
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