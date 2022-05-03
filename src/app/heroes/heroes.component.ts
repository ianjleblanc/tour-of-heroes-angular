import { Component, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  imgPath = '../../assets/images/'
  subscriptions: Subscription[] = [];

  // create some obj for chart values to equal --size
  // chartStats = Hero? { 10: --size:0.2 }

  // flight

  constructor(private heroService: HeroService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().pipe(
      tap(data => console.log('data: ', data))
    )
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  addSubscription(...subscriptions: Subscription[]) {
    this.subscriptions.push(...subscriptions);
  }

  getSize(stat: number){
    return stat * .01;
  }

  edit(id: number) {
    this.router.navigate(['..',id, 'edit'], {relativeTo: this.route});
  }


  async onDelete(hero: Hero) {
    // add swal.fire for delete confirmationt

    // this.heroes = this.heroes.filter(h => h !== hero);
    // this.heroService.deleteHero(hero.id).subscribe();

    const {value: confirm} = await Swal.fire({
      title: 'Delete?',
      text: `Are you sure you want to delete ${hero.name}`,
      showConfirmButton: true,
      confirmButtonText: 'Yes',
      showCancelButton: true,
      cancelButtonText: 'No, Cancel',
      cancelButtonColor: 'red',
      icon: 'warning'
    });

    if (confirm) {
      this.addSubscription(this.heroService.deleteHero(hero.id).subscribe({
        next: () => {
          this.heroes = this.heroes.filter(h => h !== hero);
        },
        error: (err) => {
          console.log('There was an issue deleting this hero: ', err);
        }
      }));
    }


  }


}
