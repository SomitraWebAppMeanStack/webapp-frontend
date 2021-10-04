import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Subscriber } from 'rxjs';

declare var $:any;
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})

export class ContactsComponent implements OnInit {
  addInList: Boolean = true;




  // submitted: Boolean = false;
  // contactsForm: FormGroup;
  constructor(
    private  http: HttpClient,
    public fb: FormBuilder,
  ) {
    // this.contactsForm = this._fb.group({
    //   name: ['', [Validators.required]],
    //   email: ['', [Validators.required, Validators.email]],
    //   phone: ['', [Validators.required]],
    //   location: ['', [Validators.required]],
    //   company: [''],
    //   website: [''],
    //   projectSynopsis: ['', [Validators.required]],
    // });
  }

  ngOnInit(): void {}

  toggleButton() {
    this.addInList = !this.addInList;
  }

  formValidation= new FormGroup({
    name:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    phone_number:new FormControl("",[Validators.required]),
    location:new FormControl("",[Validators.required]),
    org_name:new FormControl("",[Validators.required]),
    website:new FormControl("",[Validators.required]),
    discription:new FormControl("",[Validators.required])

  })

  textFiled(){
    console.log(this.formValidation.value)
  }

  get namevalid(){
    return this.formValidation.get("name")
  }
  get email(){
    return this.formValidation.get("email")
  }
  get phone_number(){
    return this.formValidation.get("phone_number")
  } get location(){
    return this.formValidation.get("location")
  } get org_name(){
    return this.formValidation.get("org_name")
  } get website(){
    return this.formValidation.get("website")
  }
  get discription(){
    return this.formValidation.get("discription")
  }


  submitForm(data:NgForm) {
    console.log(data);
  
  
      this.http
        .post(
          'http://localhost:3000/sendMail',data).subscribe(
          (response) => alert("successfully send"),
          (error) => console.log(error)
          
        )
        
    }
    
  

}
