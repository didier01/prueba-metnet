import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetDataAction } from 'src/app/redux/offers.actions';




interface AppState {
  offer: {};
}


@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})


export class OfferComponent implements OnInit {

  id = '020pc';
  name = 'PC gamer'
  offer = {};

  constructor(private store: Store<AppState>) {

    this.store.subscribe(state => {
      this.offer = state.offer;
      // state.offer
      console.log(this.offer);
    });

    const action = new GetDataAction();
    store.dispatch(action);

  }

  ngOnInit(): void {
  }

  onClick() {
    console.log('offer component');
  }

}
