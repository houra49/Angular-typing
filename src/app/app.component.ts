import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length=0;
  includeNumbers=false;
  includeLetters=false;
  includeSymbols=false;
  password='';

  onChangeLength(value:string){
    const parsedValue= parseInt(value);

    if(!isNaN(parsedValue)){
      this.length=parsedValue;
    }
  }
  
  onChangeLetters(){
    this.includeLetters=!this.includeLetters;
  }
  onChangeNumbers(){
    this.includeNumbers=!this.includeNumbers;
  }
  onChangeSymbols(){
    this.includeSymbols=!this.includeSymbols;
  }

  onClickButton(){
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '1234567890'
    const symbols = '!§$%&/=?*@#'

    // Hier validchars(kann anderen Name haben) ist eine leere String,damit unsere Value da gezeigt werden.(Muss leer sein)
    let validChars='';
    if(this.includeLetters){
      validChars += letters;
    }
    if(this.includeNumbers){
      validChars += numbers;
    }
    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i=0;i<this.length;i++){
      const index = Math.floor(Math.random()*validChars.length);
      generatedPassword+=validChars[index];
    }
    this.password = generatedPassword;
  }
}
