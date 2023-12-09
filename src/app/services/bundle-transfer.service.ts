import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BundleTransferService {

    getBundleTransfers(): Observable<BundleTransfer[]>{
        const bundleTransfers : BundleTransfer[] = [
            {
                taskId : 1,
                customerCode : 'RBC',
                bundleName : 'B123-RBC-OUTPUT.zip',
                status : 'SUCCESS'
            },
            {
                taskId : 2,
                customerCode : 'RBC',
                bundleName : 'B123-RBC-OUTPUT.zip',
                status : 'SUCCESS'
            },
            {
                taskId : 3,
                customerCode : 'RBC',
                bundleName : 'B123-RBC-OUTPUT.zip',
                status : 'PARTIAL_SUCCESS'
            }            
        ];
        return of(bundleTransfers);
    }
}

export interface BundleTransfer {
    taskId : number,
    customerCode : string,
    bundleName : string,
    status : string 
}
export interface BundleTransferDetail{
    fileTransferDetail : FileTransferDetail[]
}
export interface FileTransferDetail{
    bundle : FileDetail,
    contents : FileDetail[],
    target : TransferTarget,
    transferDetail : TransferDetail
}
export interface TransferDetail {
    hostname : string,
    username : string,
    scriptName : string,
    scriptStdOut : string,
    scriptStdErr : string,
    scriptParams : string
}
export interface FileDetail{
    filename : string;
}
export interface TransferTarget {
    environment : string,
    destination : string
}