
import { Component, OnInit } from '@angular/core';
import {Http,RequestOptions,Headers} from "@angular/Http";
import {Router} from "@angular/router";
import {NgForm}from"@angular/forms";

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  file : File;
  imagePath = "";

  constructor(private http : Http) { }

  ngOnInit() {
  }

  fileChange($event){
    this.file = $event.target.files[0];
    console.log(this.file);
  }


  upload(f : NgForm){

    let formData = new FormData();
    formData .append("profile", this.file);
    formData .append("name", "f.value.name");
    formData .append("price", "f.value.price");

    let header = new Headers();
    let options = new RequestOptions({ headers : header });

    this.http.post("http://localhost:3000/upload", formData, options)
    .subscribe(
      result => {
        console.log(result.json());
        this.imagePath = result.json().path;
      },
      error => {
        console.log(error);
      },
    );

  }

  



}
