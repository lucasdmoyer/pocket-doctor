import { Component, OnInit } from '@angular/core';
import { DiagnoseService } from '../diagnose.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-diagnose',
  templateUrl: './diagnose.component.html',
  styleUrls: ['./diagnose.component.css']
})
export class DiagnoseComponent implements OnInit {
  response: any;
  diagnoseForm;
  query: String;


  constructor(
    private diagnoseService: DiagnoseService,
    private formBuilder: FormBuilder,) {
      this.diagnoseForm = this.formBuilder.group({
        query: '',
      });

    }

  
  ngOnInit() {
    // this.getResponse(this.query)
    // //console.log(this.diagnoseService.postDiagnose('asdfd','I am sick'))//.subscribe(response => this.response = response);
    // console.log(this.response)
  }

  getResponse(data: String): void {
    this.diagnoseService.postDiagnose(data).subscribe(response => this.response = response)
  }

  onSubmit(query) {
    // Process checkout data here
    //console.warn('Your order has been submitted', customerData);
    //this.items = this.cartService.clearCart();
    console.log(query['query'])
    this.diagnoseForm.reset();
    this.response = [];
    this.getResponse(query['query'])
    this.query = ''
    
  }
  

}
