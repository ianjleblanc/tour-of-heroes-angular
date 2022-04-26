import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'Tour of Heroes';



  ngOnInit(): void {
    // Swal.fire({
    //   title: 'Become a Hero!',
    //   text: 'Subscribe to our weekly newsletter.',
    //   // imageUrl: 'https://unsplash.it/400/200',
    //   imageUrl: 'https://www.influencive.com/wp-content/uploads/2017/07/superhero.jpg',
    //   imageWidth: 500,
    //   imageHeight: 300,
    //   imageAlt: 'Ultor on mount olympus',
    //   confirmButtonText: 'Sign Up',
    // })
  }
}
