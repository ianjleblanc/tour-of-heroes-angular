import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesComponent } from './heroes.component';


@NgModule({
  declarations: [
    HeroDetailComponent,
    HeroSearchComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class HeroesModule { }
