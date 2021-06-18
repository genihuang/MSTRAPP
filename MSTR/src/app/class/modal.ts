export interface ModalOptions {
    type?: ModalType;
    headText?: string;
    imgContent?: string;
    txtContent?: string;
    showWarning?: boolean;
  }
  
  export enum ModalType {
    CancelDelete,
    Confirm,
    ModifyPwd,
    Block,
    Doc
  }
