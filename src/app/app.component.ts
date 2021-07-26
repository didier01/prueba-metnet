import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { GET_DATA } from './redux/offers.actions';

import * as ofertas from "../assets/ofertas.json";
import { Observable } from 'rxjs';
import { appState } from './redux/offers_reducer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'prueba-metnet';
  ofertas = ofertas['default'];

  // offer: Observable<any>;

  constructor(private store: Store<appState>) {
    // this.offer = store.select('offer');

    // this.store.subscribe(state => {
    //   this.offer = state.offer;
    // });

    // const action = new GetDataAction();
    // store.dispatch(action);

  }

  ngOnInit() {}

  getId(value) {
    this.store.dispatch({type: GET_DATA, payload: value});
  }



}
