import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../hero';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../../hero.service';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero;

  imgPath = '../../assets/images/'


  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero)
  }

  getSize(stat: number){
    return stat * .01;
  }

  edit(id: number) {
    this.router.navigate(['../..',id, 'edit'], {relativeTo: this.route});
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack())
    }
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

    // if (confirm) {
    //   this.addSubscription(this.heroService.deleteHero(hero.id).subscribe({
    //     next: () => {
    //       this.heroes = this.heroes.filter(h => h !== hero);
    //     },
    //     error: (err) => {
    //       console.log('There was an issue deleting this hero: ', err);
    //     }
    //   }));
    // }



    // addSubscription(...subscriptions: Subscription[]) {
    //   this.subscriptions.push(...subscriptions);
    // }

  }


}
