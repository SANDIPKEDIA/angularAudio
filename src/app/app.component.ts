import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() : void {
    this.playAudio(); 
  }
  private audioObj = new Audio();
  playAudio(){ 
    this.audioObj.src = "../../../assets/audio/Jeremy Zucker - comethru.mp3";
    this.audioObj.load();
    this.audioObj.play();
   }
  stopAudio(){
    this.audioObj.pause();
  }  
}