import { Component, OnInit, AfterContentInit, Input, ViewChild, ViewContainerRef, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-rotating-image-container',
  templateUrl: './rotating-image-container.component.html',
  styleUrls: ['./rotating-image-container.component.css']
})


export class RotatingImageContainerComponent implements OnInit {

  images = [
    { id:'Barthes', classes:'image bw hidden', url:'../assets/barthes-clear-5x5.png', alt:'Roland Barthes'},
    { id:'Varda', classes:'image bw hidden', url:'../assets/varda-clear-5x5.png', alt:'Agnes Varda'},
    { id:'Didion', classes:'image bw hidden', url:'../assets/didion-clear-5x5.png', alt:'Joan Didion'},
    { id:'Mehretu', classes:'image bw hidden', url:'../assets/mehretu-clear-5x5.png', alt:'Julie Mehretu'},
    { id:'Berman', classes:'image bw hidden', url:'../assets/berman-clear-5x5.png', alt:'David Berman'},
    { id:'Taylor', classes:'image bw hidden', url:'../assets/taylor-clear-5x5.png', alt:'Henry Taylor'},
    { id:'Table', classes:'image color hidden', url:'../assets/table.jpg', alt:'Table'},
    { id:'Painting With Shelf', classes:'image color hidden', url:'../assets/painting-with-shelf.jpg', alt:'Painting With Shelf'},
    { id:'Paintings With Chessboard', classes:'image color hidden', url:'../assets/paintings-with-chessboard.jpg', alt:'Paintings With Chessboard'},
    { id:'Cowboy and Collab', classes:'image color hidden', url:'../assets/cowboy-and-collab.jpg', alt:'Cowboy And Collab'},
    { id:'Collab WIP', classes:'image color hidden', url:'../assets/collab-wip.jpg', alt:'Collab WIP'},
    { id:'Bucc-Ee', classes:'image color hidden', url:'../assets/buccee.jpg', alt:'Bucc-Ee'},
    { id:'Collab and Fetish', classes:'image color hidden', url:'../assets/collab-and-fetish.jpg', alt:'Collab And Fetish'},
  ];

  index = 1;
  static interval = true;
  id: any;
  defaultInterval = 5000;
  @Input() interval = this.defaultInterval;

  constructor() { }

  ngOnInit(): void {
    this.shuffleImages();
    
    if (RotatingImageContainerComponent.interval == true) {
      this.id = setInterval(() => this.changeLogo(), this.interval);
      RotatingImageContainerComponent.interval = false;
    }
  }

  ngAfterViewInit(): void {
    this.clearImages();
    this.showImage(0);
  }

  ngOnDestroy(): void {
    clearInterval(this.id);
  }

  clearImages() {
    for(let i = 0; i < this.images.length; i++) {
      this.hideImage(i);
    }
  }

  changeLogo() {
    let currIndex = this.index % this.images.length;

    this.showImage(currIndex);
    
    for(let i = 0; i < this.images.length; i++) {
      if(i != currIndex) {
        this.hideImage(i);
      }
    }
    this.index++;
  }

  showImage(index: number) {
    let showImage = document.getElementById(this.images[index].id) as HTMLElement;
    console.log('Show Image');
    showImage.style.display = "block"
  }

  hideImage(index: number) {
    let hideImage = document.getElementById(this.images[index].id) as HTMLElement;
    console.log('Hide Image');
    hideImage.style.display = "none"
  }

  shuffleImages() {
    let currentIndex = this.images.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [this.images[currentIndex], this.images[randomIndex]] = [
        this.images[randomIndex], this.images[currentIndex]];
    }
  }
}
