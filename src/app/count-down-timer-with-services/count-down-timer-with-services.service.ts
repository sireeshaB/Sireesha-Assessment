import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class CountDownTimerService {
    constructor(private http: HttpClient) {

    }
    timerObj = new Subject<any>();
    buttonText = new Subject<string>();
    setTimerObj(value:any) {
        this.timerObj.next(value);
    }
    getTimerObj() {
        return this.timerObj.asObservable()
    }
    setButtonText(text:string) {
        this.buttonText.next(text)
    }
    getButtonText() {
        return this.buttonText.asObservable()
    }
}