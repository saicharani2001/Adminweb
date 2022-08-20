import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserservService } from '../userserv.service';

@Component({
  selector: 'app-managerdetails',
  templateUrl: './managerdetails.component.html',
  styleUrls: ['./managerdetails.component.css']
})
export class ManagerdetailsComponent implements OnInit {
  managers:any=[];
  



  constructor(private router:Router,private userserv:UserservService) { }
  displayedColumns: string[] = ['fullname','age','licenseId','phone','password','city','place','pincode','street','edit','delete'];

  ngOnInit(): void {
    this.retrieveManagers();
  }
  retrieveManagers() {
    this.userserv.getAll().subscribe(
      data=>{
        this.managers=data;
        console.log(data);
      },
      error=>{
        console.log(error)
      }
    );
  }
  deleteDriver(lid:any){
    console.log(lid);
    this.userserv.delete(lid).subscribe(
      response=>{
        console.log(response);
        this.ngOnInit();
      },
      error=>{
        console.log(error);
      }
    )
  }
  editDetails(id:any){
    this.managers.forEach((element:any) => {
      if(element['licenseId']==id){
        this.userserv.details=element;
        this.router.navigate(['alterpage']);
      }
    });
  }
  }


