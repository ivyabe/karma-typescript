export type UnmsPrimitiveData = number | string | boolean;
export type UnmsPrimitiveArray = UnmsPrimitiveData[];

export enum Binary {
    ZERO = 0,
    ONE = 1,
    TWO = 2,
    THREE = 3
}

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

export class StdViewManager {
    private display: any;
    public startDisplay() {
        if (this.display === null) {
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