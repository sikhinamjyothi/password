import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randompassword',
  templateUrl: './randompassword.component.html',
  styleUrls: ['./randompassword.component.css']
})
export class RandompasswordComponent implements OnInit {
  
  includeletters=false;

//   onChangeUppercase(){
// this.includeletters=!this.includeletters
//   }

   selectedvalue=0;
  

  generatedPassword: string = '';

  generatePassword(): void {
    const length = 7; 

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbols='!@#$%^&*()';

    const allChars = uppercaseChars + lowercaseChars + numberChars +symbols;

    let password = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }

    this.generatedPassword = password;
  }

  constructor() { }

  ngOnInit(): void {

   
    


  }

}
