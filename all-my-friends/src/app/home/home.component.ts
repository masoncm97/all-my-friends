import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  index = 0;
  id: any;
  numLogos = 6;
  displayedLogo = '';
  hiddenLogo = '';

  ngOnInit(): void {
    this.changeLogo()
    this.id = setInterval(() => this.changeLogo(), 1500);
  }

  ngOnDestroy(): void {
    clearInterval(this.id);
  }

  changeLogo() {
    let displayLogo = document.getElementsByClassName(String(this.index % this.numLogos))[0] as HTMLElement;
    let hideLogo = document.getElementsByClassName(this.hiddenLogo)[0] as HTMLElement;
    if(hideLogo) {
      hideLogo.style.display = "none"
    }
    let mainLogo = document.getElementById('amf-outline') as HTMLElement;
    mainLogo.style.display = "none";
    displayLogo.style.display = "block";
    this.hiddenLogo = String(this.index % this.numLogos)
    this.index++;
  }
}
