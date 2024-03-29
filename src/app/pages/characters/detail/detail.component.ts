import { Component, Input, OnInit } from '@angular/core';
import { RickyMortyService } from "../../../core/services/ricky-morty.service";
import { catchError, Observable, tap, throwError } from "rxjs";
import { RickyAndMorty } from "../../../core/model/rick-and-morty.model";
import { AsyncPipe, DatePipe, JsonPipe, NgIf } from "@angular/common";
import { LoadingComponent } from "../../../layout/loading/loading.component";
import { Location } from "@angular/common";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    JsonPipe,
    DatePipe,
    LoadingComponent
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  @Input() id: string = '';
  rickMorty$!: Observable<RickyAndMorty>
  loading: boolean = true

  ngOnInit() {
    this.rickMorty$ = this.rickyMortyService.getDetailRickyAndMorty(this.id).pipe(tap(() => {
        return this.loading = true
      }),
      catchError((error) => {
        this.loading = false
        return throwError(error);
      }));
  }

  constructor(private rickyMortyService: RickyMortyService, public location: Location) {
  }

}
