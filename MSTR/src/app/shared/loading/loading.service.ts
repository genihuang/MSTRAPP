import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _showLoadingToggle$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  show() {
    this._showLoadingToggle$.next(true);
  }

  hide() {
    this._showLoadingToggle$.next(false);
  }

  getLoadingStatus() {
    return this._showLoadingToggle$.asObservable();
  }

}
