import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gift } from '../interfaces/gifs.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent {
  get results(): Gift[] {
    return this.gifsService.results;
  }

  constructor(
    private gifsService: GifsService
  ) { }

}
