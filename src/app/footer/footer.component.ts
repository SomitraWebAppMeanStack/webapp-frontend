import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }
  
  formValidation= new FormGroup({
    email:new FormControl("",[Validators.required]),
  })


  get email(){
    return this.formValidation.get("email")
  }
 
    EmailData(data:NgForm){
    console.log(data);

    // this.http
    // .post(
    //   'http://localhost:3000/sendMail',data).subscribe(
    //   (response) => alert("successfully send"),
    //   (error) => console.log(error)
      
     
    // )
    
  }

  
}
