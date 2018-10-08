import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  numList: String[]= ['5','10','15'];


  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // this.getHeroes();
    this.heroService.getAllHeros().subscribe((data)=>{
      this.heroes = <Hero[]>data;
    },err=>{
      console.log(err)
    })
  }
  
  modifyHero(id: any) {
    const request = {

    }
    this.heroService.patchHeros(request).subscribe((data)=>{
      this.heroes = <Hero[]>data;
    },err=>{
      console.log(err)
    })
  }
  

  getHeroes(): void {
    this.heroService.getAllHeros().subscribe((data)=>{
      console.log(data);
    })
    // this.heroService.getHeroes()
    // .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  right() :void{
    this.left

  }
  left() :void{

  }
  option(num: any) :void{
    console.log(this.numList[num]);
  }
}
// import { Component, OnInit } from '@angular/core';
// import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
// import { HeroService } from '../hero.service';

// @Component({
//   selector: 'app-heroes',
//   templateUrl: './heroes.component.html',
//   styleUrls: ['./heroes.component.css']
// })
// export class HeroesComponent implements OnInit {

//   // heroes = HEROES;
//   heroes: Hero[];

//   selectedHero: Hero;


//   constructor() { }

//   ngOnInit() {
    
//     // const test = [];
//     // for (let i = 0; i<this.heroes.length;i++) {
//     //   if(this.heroes[i].id === 12) {
//     //     this.heroes.splice(i,1);
//     //   }
//     //   // test.push(this.heroes[i]);
//     //   //   console.log(test);
//     // }
//     // console.log(test);
//     // for (let item of this.heroes) {

//     // }
//     // for (let item in this.heroes) {

//     // }
//     // this.heroes.forEach(element => {
      
//     // });    
//   }
//   onSelect(hero: Hero): void {
//     this.selectedHero = hero;
//   }
// }
// // export class HeroesComponent implements OnInit {
// //   heroesTest: Hero = {
// //     id :111,
// //     name: "test"
// //   }

// //   heroes: Hero[] = [
// //     { id: 11, name: 'Mr. Nice' },
// //     { id: 12, name: 'Narco' },
// //     { id: 13, name: 'Bombasto' },
// //     { id: 14, name: 'Celeritas' },
// //     { id: 15, name: 'Magneta' },
// //     { id: 16, name: 'RubberMan' },
// //     { id: 17, name: 'Dynama' },
// //     { id: 18, name: 'Dr IQ' },
// //     { id: 19, name: 'Magma' },
// //     { id: 20, name: 'Tornado' }
// //   ]
 
// //   constructor() { }
 
// //   ngOnInit() {
// //     for(let i =0;i<this.heroes.length;i++) {
// //       console.log(this.heroes[i].name);
// //     }
// //     console.log(this.heroes)
// //     console.log(this.heroes[4])
// //   }
 
// // }



