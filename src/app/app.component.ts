import { Component, OnInit } from '@angular/core';
import { isSuccess } from 'angular-in-memory-web-api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showNewsLetter: boolean = true;
  // title = 'Tour of Heroes';


  ngOnInit(): void {
    let json = sessionStorage.getItem('showNewsLetter');
    if (json){
      this.showNewsLetter = JSON.parse(json);
    }
    if (this.showNewsLetter){
      setTimeout(async ()=>{
        const {value: confirm} = await Swal.fire({
          title: 'Become a Hero!',
          text: 'Subscribe to our weekly newsletter.',
          imageUrl: 'https://www.influencive.com/wp-content/uploads/2017/07/superhero.jpg',
          imageWidth: 500,
          imageHeight: 300,
          imageAlt: 'Super Hero on mount olympus',
          confirmButtonText: 'Sign Up!',
          confirmButtonColor: 'LightSeaGreen',
          showCancelButton: true,
          cancelButtonText: "I'm Not a Hero..",
          cancelButtonColor: 'Crimson'


        })

        if (confirm){
          this.showNewsLetter = false;
          sessionStorage.setItem('showNewsLetter', JSON.stringify(false));
        }
      }, 5000)
    }
  }
}
