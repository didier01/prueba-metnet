import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from 'src/app/redux/offers_reducer';



@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})


export class OfferComponent implements OnInit {


  offer: Observable<any>;

  constructor(private store: Store<appState>) {
    this.offer = store.select('offer');

    // this.store.subscribe(state => {
    //   this.offer = state.offer;
    // });
  }

  ngOnInit() {
  }

 

}
