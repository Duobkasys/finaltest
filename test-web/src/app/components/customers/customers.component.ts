import { Component, Input, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { IrasaiService } from 'src/app/services/irasai.service';
import { PopUpDialogComponent } from '../pop-up-dialog/pop-up-dialog.component';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  first = 0;
  rows = 10;
  disp: boolean = false;
  view: boolean = false;
  customerForm = {
    name: '',
    surname: '',
    birthdate: '',
    telnum: '',
    email: '',
  };
  selectedProduct1 : any;
  customer : any[] = [];
  constructor(private html : IrasaiService){

  }

  ngOnInit(): void {
    this.html.getCustomerInfo().subscribe((response)=> {console.log(response);
    this.customer = response;
    });
  }
  clear(table: Table) {
    table.clear();
}
  viewonly(): void{
    this.view = true;
  }
  openDialog(): void{
    this.disp = true;
  }
  closeDia() : void{
    this.disp = false;
    this.view = false;
  }
  update() : void{
    this.html.getCustomerInfo().subscribe((response)=> {console.log(response);
      this.customer = response;});
  }

next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

isLastPage(): boolean {
    return this.customer ? this.first === (this.customer.length - this.rows): true;
}

isFirstPage(): boolean {
    return this.customer ? this.first === 0 : true;
}

}
