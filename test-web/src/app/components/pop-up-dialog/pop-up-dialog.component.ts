import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IrasaiService } from 'src/app/services/irasai.service';

@Component({
  selector: 'app-pop-up-dialog',
  templateUrl: './pop-up-dialog.component.html',
  styleUrls: ['./pop-up-dialog.component.css']
})

export class PopUpDialogComponent {
  @Input()
  displayBasic: boolean = false;
  @Input()
  viewOnly: boolean = false;
  @Input()
  cust: any;

  @Output() visibleChange:EventEmitter<any> = new EventEmitter();
  visible: boolean = false;
  afterHide() {
    this.visibleChange.emit(false);
    console.log(this.cust);
  }
  customerForm = {
    name: '',
    surname: '',
    birthdate: '',
    telnum: '',
    email: '',
  };
  constructor(
    private html : IrasaiService
  ) {}
  addNewCust(): void{
    this.html.postNewCustomer(this.customerForm).subscribe((response)=> {console.log(response)});
  }

  
}