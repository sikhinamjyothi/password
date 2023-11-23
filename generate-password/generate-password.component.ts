import {
  Component,
  OnInit
} from '@angular/core';


@Component({
  selector: 'app-generate-password',
  templateUrl: './generate-password.component.html',
  styleUrls: ['./generate-password.component.css']
})

export class GeneratePasswordComponent implements OnInit {

   outPass:any;
   selectedvalue = 0;
   password = '';
   length ='';
  

   includeuppercase = false;
   includelowercase=false;
   includenumbers = false;
   includesymbols = false;
   includeallcharacters=false;


  onChangeLength() {}
  onChangeUseupppercase(){
    this.includeuppercase=!this.includeuppercase;
  }
  onChangeUseLowercase(){
    this.includelowercase=!this.includelowercase;
  }  
  onChangeUseNumbers() {
    this.includenumbers = !this.includenumbers;
  }
  onChangeUseSymbols() {
    this.includesymbols = !this.includesymbols;
  }
  onChangeUseAllCharacters(){
    this.includeallcharacters=!this.includeallcharacters;
  }

  onButtonClick() {

    const uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';
    const allcharacters='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()';

    let validChars = '';
   
    if (this.includeuppercase) {
      validChars += uppercase;
    }
    if (this.includelowercase) {
      validChars += lowercase;
    }
    if (this.includenumbers) {
      validChars += numbers;
    }
    if (this.includesymbols) {
      validChars += symbols;
    }
    if (this.includeallcharacters){
      validChars +=allcharacters;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.selectedvalue; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
    this.outPass = generatedPassword;

  }

  constructor() {}

  ngOnInit(): void {

  }

}
