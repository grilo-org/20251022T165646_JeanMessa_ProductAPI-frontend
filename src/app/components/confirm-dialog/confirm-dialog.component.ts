import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'confirm-dialog',
  imports: [NgClass],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss'
})
export class ConfirmDialogComponent {
  
  @Input() modalTitle:string = '';
  @Input() modalBody:string = '';
  @Input() confirmText:string = '';
  @Input() confirmBtnVariant:string = '';
  @Output() confirmEvent = new EventEmitter()

  onConfirm(){
    this.confirmEvent.emit();
  }

}
