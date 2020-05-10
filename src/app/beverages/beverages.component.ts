import { Component, OnInit } from '@angular/core';
import { BeverageService } from './beverage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})

export class BeveragesComponent implements OnInit {

  beverages: Array<Object> = [];

  constructor(private router: Router, private beverageService: BeverageService) {
  }

  async ngOnInit() {
    await this.getBeverages();
  }

  getBeverages() {
    this.beverageService.getbeverages().then((resp) => {
      this.beverages = resp;
    });
  }

  goToCreate() {
    this.router.navigate(['beverages-create']);
  }

  deleteBeverages(id: string) {
    this.beverageService.deletebeverages(id).then((resp) => {
      if (resp) {
        this.beverages = this.beverages.filter((beverages) => {
          return beverages['id'] !== id;
        });
      }
    });
  }

}