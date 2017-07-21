import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-details.component.html',
  styleUrls: [ './hero-details.component.css' ]
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  @Input() hero: Hero;

  ngOnInit(): void {
   this.route.paramMap
     .switchMap((params: ParamMap) =>
       this.heroService.getHero(+params.get('id')))
     .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
   this.location.back();
  }

}
