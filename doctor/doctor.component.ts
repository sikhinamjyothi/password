import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  myUserData: any = [];

  constructor(private httpServie: HttpClient ) { }

  ngOnInit(): void {
        this.httpServie.get('https://localhost:7274/api/Doctors/getAllDoctors').subscribe(res =>{
          
          this.myUserData = res;
          console.log(this.myUserData);
    
        });
      }
}

// export class CricketComponent implements OnInit {
//   myUserData: any = [];

//   constructor(private httpServie: HttpClient ) { }

//   ngOnInit(): void {
//     this.httpServie.get('https://localhost:7259/api/Cricket/cricketPlayers').subscribe(res =>{
      
//       this.myUserData = res;
//       console.log(this.myUserData);

//     });
//   }
// }