import { Injectable ,Component, Input, OnInit, NgZone, ChangeDetectorRef} from '@angular/core';
import { fromEvent, merge, interval, Observable, of, Subscription } from 'rxjs'
import { switchMap, take, skipWhile, takeLast, skipUntil, tap } from 'rxjs/operators'
import * as env from '../environment/environment'

@Injectable({
  providedIn: 'root'
})
export class IdleService {
  inactivityTime: number = env.idleTimeout;
  timeLapsedSinceInactivity: number = 0;
  minute: number = this.padZero(0);
  seconds: number = this.padZero(0);
  subscription: Subscription;
  observeable$: Observable<any>;
  mergedObservable$: Observable<any>;
    public inactivityTimerEvent: Array<any>[] = [[document, 'click'], [document, 'wheel']
    , [document, 'scroll'], [document, 'mousemove'], [document, 'keyup'], [window, 'resize']
    , [window, 'scroll'], [window, 'mousemove']];
  constructor(public _ngZone: NgZone,
    public _cd: ChangeDetectorRef) {

  }

  createObserable(): void {
    this._ngZone.runOutsideAngular(() => {

      this.observeable$ = this.mergedObservable$
      .pipe(
        switchMap(ev => interval(1000).pipe(take      (this.inactivityTime))),

        tap(value => this.isItTimeToShowPopUp(value)),

        skipWhile((x) => {
          this.timeLapsedSinceInactivity = x;
          return x != this.inactivityTime - 1
        })
      );

      this.subscribeObservable();
    })

  }

  isItTimeToShowPopUp(val: number) {
    let timeLeftForInactive = this.inactivityTime - val;
    if (timeLeftForInactive <= 13) {

      this.timeLapsedSinceInactivity = timeLeftForInactive;
      this.minute = this.padZero(Math.floor(timeLeftForInactive / 13));
      this.seconds = this.padZero(timeLeftForInactive % 13);
      this._cd.detectChanges();
      console.log(timeLeftForInactive);
    }
  }

  subscribeObservable() {
    this.subscription = this.observeable$.subscribe((x) => {
      console.log(`subscribed for ${x + 1} sec`);
      this.unsubscribeObservable()
    })
  }
  padZero(digit: any) {
    return digit <= 9 ? '0' + digit : digit;
  }

  unsubscribeObservable() {
    console.log('  unsubscriebd')
    this.subscription.unsubscribe();
  }

  initTimer():void{
    let observableArray$: Observable<any>[] = [];
    this.inactivityTimerEvent.forEach(x => {
      observableArray$.push(fromEvent(x[0], x[1]))
    })
    this.mergedObservable$ = merge(...observableArray$);
  }
  startTimer() :void{
    this.createObserable();
    console.log('subscription started');
  }
  stopTimer() :void{
    if (this.subscription && !this.subscription.closed) {
      this.minute = this.padZero(0);
      this.seconds = this.padZero(0);
      this.unsubscribeObservable();
    }
  }
}
