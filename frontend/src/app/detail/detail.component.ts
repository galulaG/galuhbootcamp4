
import { Component, OnInit} from "@angular/core"
import { Http, RequestOptions, Headers } from "@angular/http";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  params
  units 
  
  constructor( private http : Http, private route : Router ) { }

  ngOnInit() {
    this.params
    .subscribe(
      result=>{
        this.params = result["id"]
      }
    )

    this.http.get("http://localhost:3000/api/product/id" + this.params)
    .subscribe(
      result=>{
        this.units=result.json()
      },
      error=>{
        console.log(error)
      }
    )
  }
}
  
