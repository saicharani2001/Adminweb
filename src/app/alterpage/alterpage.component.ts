import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserservService } from '../userserv.service';

@Component({
  selector: 'app-alterpage',
  templateUrl: './alterpage.component.html',
  styleUrls: ['./alterpage.component.css']
})
export class AlterpageComponent implements OnInit {
  Driverdetails:any
  display:boolean=false;
  constructor(private userserv:UserservService,private snackbar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.Driverdetails=this.userserv.details;
  }
  updateDetails(){
    const data={
      fullname:this.Driverdetails.fullname,
      age:this.Driverdetails.age,
      licenseId:this.Driverdetails.licenseId,
      phone:this.Driverdetails.phone,
      password:this.Driverdetails.password,
      city:this.Driverdetails.city,
      place:this.Driverdetails.place,
      pincode:this.Driverdetails.pincode,
      street:this.Driverdetails.street
    }
    this.userserv.update(this.Driverdetails.licenseId,data).subscribe(
      response=>{
        console.log(response);
        this.snackbar.open("Updated Successfully","ok",{duration:3000});
        this.display=true;
      },
      error=>{
        console.log(error);
      }
    )
  }
  navTo(){
    this.router.navigate(['managerdetails']);
  }
}
