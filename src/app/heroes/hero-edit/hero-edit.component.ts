import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription, switchMap, tap } from 'rxjs';
// import {MatFormFieldModule} from '@angular/material/form-field';

import { Hero } from 'src/app/hero';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css'],
})
export class HeroEditComponent implements OnInit, OnDestroy {
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}

  subscriptions: Subscription[] = [];


  // What should this equal? and be a type of?
  heroForm: FormGroup = new FormGroup({});

  heroId: number = 0;
  heroId$ = this.route.params.pipe(
    map(params => +params['id']),
    tap((id) => (this.heroId = id))
  );

  hero$ = this.heroId$.pipe(
    switchMap(id => {
      return this.heroService.getHero(id).pipe(
        tap(hero => console.log('hero: ', hero)),
        tap(hero => this.createForm(hero))
      );
    })
  )

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.heroId = 0;
    this.unsubscribeAll();
  }

  createForm(hero: Hero){
    this.heroForm = new FormGroup({
      name: new FormControl(hero.name, [Validators.required]),
      gender: new FormControl(hero.gender, [Validators.required]),
      species: new FormControl(hero.species, [Validators.required]),
      world: new FormControl(hero.world, [Validators.required]),
      flight: new FormControl(hero.flight, [Validators.required]),
      img: new FormControl(hero.img, [Validators.required]),
      intelligence: new FormControl(hero.intelligence, [Validators.required]),
      strength: new FormControl(hero.strength, [Validators.required]),
      speed: new FormControl(hero.speed, [Validators.required]),
      combat: new FormControl(hero.combat, [Validators.required]),
      durability: new FormControl(hero.durability, [Validators.required]),
    });
  }

  addSubscription(...subscriptions: Subscription[]) {
    this.subscriptions.push(...subscriptions);
  }

  unsubscribeAll(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
    this.subscriptions = [];
  }

  onSave() {}
}
