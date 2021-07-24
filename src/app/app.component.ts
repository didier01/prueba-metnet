import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { GetDataAction } from './redux/offers.actions';
import { getOffer, offersReducer, setID } from './redux/offers_reducer';
import * as ofertas from "../assets/ofertas.json";

interface AppState {
  offer: {};
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  title = 'prueba-metnet';
  offer = {};

  ofertas = ofertas['default'];
  

  constructor(private store: Store<AppState>) {

    this.store.subscribe(state => {
      this.offer = state.offer;
    });

    const action = new GetDataAction();
    store.dispatch(action);

  }

  ngOnInit() {
  }


  getId(value) {
    setID(value);
    const action = new GetDataAction();
    this.store.dispatch(action);
  }




}
