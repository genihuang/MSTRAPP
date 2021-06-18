import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';
import { ModalOptions, ModalType } from '../../class/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() fromParent:ModalOptions;
  options:ModalOptions;
  ModalType = ModalType;
  urlSafe:SafeResourceUrl;
  constructor(
    private config: NgbModalConfig,
    public sanitizer:DomSanitizer,
    public activeModal: NgbActiveModal
  ) { 
    config.backdrop = 'static';
  }

  ngOnInit() {
    console.log(this.fromParent);
    this.options=this.fromParent;
  }
  closeModal(sendData) {
    this.activeModal.close(sendData);
  }
}
