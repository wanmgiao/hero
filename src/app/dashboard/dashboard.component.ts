import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router }    from '@angular/router';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  temp = { id: Number };
  constructor(private heroService: HeroService, private route: Router) { }
 
  ngOnInit() {
    //调用
    this.getHeroes();
  }
 //把显示得英雄数量缩减为四个，第二，第三，第四，第五
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
  goTODetail(detailId: any) {
    this.temp = <any>{};
    this.temp.id = detailId;
    this.route.navigate(['/detail', JSON.stringify(this.temp)]);
  }
}