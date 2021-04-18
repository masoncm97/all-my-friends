import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  index = 0;
  numLogos = 7;
  displayedLogo = '';
  hiddenLogo = '';

  ngOnInit(): void {
    setInterval(() => this.changeLogo(), 1500);
  }

  changeLogo() {
    let displayLogo = document.getElementsByClassName(String(this.index % this.numLogos))[0] as HTMLElement;
    let hideLogo = document.getElementsByClassName(this.hiddenLogo)[0] as HTMLElement;
    if(hideLogo) {
      hideLogo.style.display = "none"
    }
    displayLogo.style.display = "block";
    this.hiddenLogo = String(this.index % this.numLogos)
    this.index++;
  }
}
