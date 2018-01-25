import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // file : File;
  units = [];

  constructor( private http : Http, private route : Router ){}

  
  ngOnInit() {
    this.http.get("http://localhost:3000/api/product/")
    .subscribe(
      result => {
        //console.log(result.json());
          this.units = result.json();
      },
      error => {
        console.log(error);
      }
  
    );

  }

}