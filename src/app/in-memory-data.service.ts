import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 11,
        name: 'Crash Nebula',
        gender: 'Male',
        species: 'Humanish',
        world: 'Chincinnati',
        flight: true,
        img: 'crash-nebula.jpg',
        intelligence: 80,
        strength: 90,
        speed: 60,
        combat: 70,
        durability: 60,
      },
      {
        id: 13,
        name: 'Crimson Chin',
        gender: 'Male',
        species: 'Humanish',
        world: 'Chincinnati',
        flight: true,
        img: 'CrimsonChin.webp',
        intelligence: 10,
        strength: 100,
        speed: 80,
        combat: 70,
        durability: 80,
      },
      {
        id: 12,
        name: 'Ultor',
        gender: 'Male',
        species: 'Humanish',
        world: 'Earth',
        flight: false,
        img: 'ultor.png',
        intelligence: 90,
        strength: 80,
        speed: 50,
        combat: 70,
        durability: 80,
      },
      {
        id: 14,
        name: 'Ignis',
        gender: 'Male',
        species: 'Jinn',
        world: 'Netherworld',
        flight: false,
        img: 'ignis.png',
        intelligence: 80,
        strength: 70,
        speed: 100,
        combat: 90,
        durability: 60,
      },
      {
        id: 15,
        name: 'Fluxtrol',
        gender: 'Male',
        species: 'Humanish',
        world: 'Earth',
        flight: false,
        img: 'fluxtrol.png',
        intelligence: 100,
        strength: 60,
        speed: 50,
        combat: 40,
        durability: 70,
      },
      {
        id: 16,
        name: 'Golden Locks',
        gender: 'Female',
        species: 'Meta Human',
        world: 'Chincinnati',
        flight: true,
        img: 'golden-locks-2.webp',
        intelligence: 30,
        strength: 40,
        speed: 50,
        combat: 20,
        durability: 60,
      },
      {
        id: 17,
        name: 'Bronze Kneecap',
        gender: 'Male',
        species: 'Dork',
        world: 'Chincinnati',
        flight: false,
        img: 'BronzeKneecap.webp',
        intelligence: 20,
        strength: 50,
        speed: 40,
        combat: 50,
        durability: 60,
      },
      {
        id: 18,
        name: 'Platinum Princess',
        gender: 'Female',
        species: 'Meta Human',
        world: 'Earth',
        flight: true,
        img: 'platinum-princess.webp',
        intelligence: 90,
        strength: 60,
        speed: 70,
        combat: 60,
        durability: 80,
      },
      {
        id: 19,
        name: 'Van Strangle',
        gender: 'Male',
        species: 'Fairy',
        world: 'Ferngully',
        flight: true,
        img: 'jorgen-van-strangle.webp',
        intelligence: 20,
        strength: 100,
        speed: 80,
        combat: 100,
        durability: 90,
      },
      {
        id: 20,
        name: 'Cat Man',
        gender: 'Male',
        species: 'Lyran',
        world: 'Lyra',
        flight: true,
        img: 'cat-man.png',
        intelligence: 60,
        strength: 40,
        speed: 70,
        combat: 60,
        durability: 70,
      },
      {
        id: 21,
        name: 'Nega Chin',
        gender: 'Male',
        species: 'Humanish',
        world: 'Chincinatti',
        flight: false,
        img: 'Nega_Chin.webp',
        intelligence: 70,
        strength: 90,
        speed: 80,
        combat: 90,
        durability: 80,
      },
      {
        id: 22,
        name: 'King Crimson',
        gender: 'Male',
        species: 'Humanish',
        world: 'Chincinatti',
        flight: false,
        img: 'king-crimson-chin.png',
        intelligence: 50,
        strength: 100,
        speed: 90,
        combat: 100,
        durability: 90,
      },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
