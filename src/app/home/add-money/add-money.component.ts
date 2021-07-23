import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css']
})
export class AddMoneyComponent implements OnInit {
  balance: number=0;
  clicked:boolean=true;
  @Input()  newAmount: number;
  constructor() { }
  ngOnInit(): void {
  }
  handleAddMoney()
  {
    this.clicked=!this.clicked;
    this.balance+=Number(this.newAmount);
    localStorage.setItem("NewAmount",JSON.stringify(this.newAmount));
    localStorage.setItem("Total Balance",JSON.stringify(this.balance));
  }
  toggle()
  {
    this.clicked=true;
  }
  
}
