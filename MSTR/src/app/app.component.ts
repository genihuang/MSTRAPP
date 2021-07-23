import { Component, HostListener, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {appPath} from './app-path.const';
import { ReplaySubject,Subject } from 'rxjs';
import {ModalOptions,ModalType} from './class/modal';
import {ModalComponent} from './shared/modal/modal.component'
import {ModalService} from './shared/modal/modal.service';
import { LoadingService } from './shared/loading/loading.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = '安聯ｅ智慧';
  path = appPath;
  showLoading: boolean;
  destroy$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  idleTime = 0;
  userActivity;
  userInactive: Subject<any> = new Subject();
  constructor(
    private router:Router,
    private loadingService: LoadingService,
    private modalService:ModalService,
    private ngbModalService:NgbModal,
    private cdRef: ChangeDetectorRef
  ) {
    this.setTimeout("init");
    this.userInactive.subscribe(
      () => {
        console.log("time out");
        // this.logout();
        this.showMsg();
      }
      );
  }
  @HostListener('window:mousemove') onMouseMove() {
    clearTimeout(this.userActivity);
    this.setTimeout("mouse move");
  }

  @HostListener('window:keydown') keyDown() {
    clearTimeout(this.userActivity);
    this.setTimeout("keydown");
  }
  @HostListener('window:click') click() {
    clearTimeout(this.userActivity);
    this.setTimeout("mouseenter");
  }

  ngOnInit() {
    console.log(this.router.url);
    this.handleLoadingViewChange();
    // this.setIntrvl();
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  handleLoadingViewChange() {
    this.loadingService.getLoadingStatus().subscribe( value => {
      this.showLoading = value;
      this.cdRef.detectChanges();
    });
  }
  setTimeout(event:string) {
    var page = this.router.url;
    if(page =='/login' || page=='/'){
      // clearTimeout(this.userActivity);
    }
    else{
      this.userActivity = setTimeout(() => this.userInactive.next(undefined), 1800000);
    }
    // console.log(event);
    // this.userActivity = setTimeout(() => this.userInactive.next(undefined), 60000);
  }
  checkTokenValid(){
    try{
      // setInterval(() => this.startGame2()
      // ,1000);
      setInterval(()=>{
        var page = this.router.url;
        this.idleTime++;
        if(page =='/login' || page=='/'){
          console.log("login");
          this.idleTime=0;
        }
        else{
          console.log(page);
          if(this.idleTime>=10)
          {
            console.log(this.idleTime);
            this.logout();
          }
        }
      }
      ,10000)
    }
    catch(e)
    {

    }
  }
  showMsg()
  {
    var msg:ModalOptions;
    var modalRtn:any;
    msg={
      headText:'閒置過久',
      txtContent :'閒置過久，請重新登入。',
      type:ModalType.Confirm
    }; 

    modalRtn=this.open(msg);
    modalRtn.result.then((result) => {
      if (result =='NEXT'){
        this.logout();
      }               
    }, (reason) => {
      console.log(reason)
    }
   );
  }
  open(modalOptions:ModalOptions):any{
    var rtn:string;
    const modalRef = this.ngbModalService.open(ModalComponent,
      {
        scrollable: true,
        centered:true,
        size:'sm'
        // keyboard: false,
        // backdrop: 'static'
      });
 
    let data = modalOptions;
 
    modalRef.componentInstance.fromParent = data;
    return modalRef;
  }
  logout()
  {
   sessionStorage.clear();
   this.router.navigateByUrl('/');
  }
}
