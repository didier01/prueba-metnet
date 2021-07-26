import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from 'src/app/redux/offers_reducer';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css']
})
export class CharacteristicsComponent implements OnInit {

  offer: Observable<any>;
  
  constructor(private store: Store<appState>) {
    this.offer = store.select('offer');
  }

  ngOnInit() {
    console.log(this.offer);
    
  }

}
