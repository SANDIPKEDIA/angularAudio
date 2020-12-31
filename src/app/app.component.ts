import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.playAudio();
    
  }

  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/snapchat_ringtone.mp3";
    audio.load();
    audio.play();
  }
  

}
