import {Component, OnInit} from '@angular/core';
import {RickyMortyService} from "../../../core/services/ricky-morty.service";
import {catchError, Observable, tap, throwError} from "rxjs";
import {Result} from "../../../core/model/rick-and-morty.model";
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {customGender, Filter, GENDER_AND_TYPE, type} from "../../../core/data/data";
import {FilterPipe} from "../../../core/pipes/filter.pipe";
import {LoadingComponent} from "../../../layout/loading/loading.component";


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    RouterLink,
    NgForOf,
    FormsModule,
    FilterPipe,
    JsonPipe,
    ReactiveFormsModule,
    LoadingComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  rickMorty$!: Observable<Result>;
  customGender: GENDER_AND_TYPE[] = customGender;
  type: GENDER_AND_TYPE[] = type;
  searchForm!: FormGroup
  filterCriteria: any = {};  // bunu pipe ile search yapsaydım kullanacaktım bunun içined paremetreler iletecektim ona göre filtrelme gerçekleşecekti
  page: string = ''
  loading: boolean = true

  constructor(public rickyMortyService: RickyMortyService, public route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Filter) => {
      let urlQueryParams: Filter = this.activatedRouteParams(params)
      this.createForm(urlQueryParams)
      this.loadRickMortyList(urlQueryParams)
    });
  }

  createForm(data: Filter) {
    this.searchForm = this.fb.group({
      name: new FormControl(data.name ?? ''),
      status: new FormControl(data.status ?? ''),
      type: new FormControl(data.type ?? ''),
      gender: new FormControl(data.gender ?? '')
    })
  }

  get sfc() {
    return this.searchForm.controls
  }

  get searchQueryFormValue() {
    return {
      name: this.sfc['name'].value,
      type: this.sfc['type'].value,
      gender: this.sfc['gender'].value,
      status: this.sfc['status'].value,
      page: ''
    }
  }

  loadRickMortyList(data?: Filter): void {
    let queryParams: Filter = this.activatedRouteParams(data)
    let item: Filter = this.checkAndClearSearchFields(queryParams)
    this.rickMorty$ = this.rickyMortyService.getAllRickyAndMortyList(item).pipe(tap(() => {
        return this.loading = true
      }),
      catchError((error) => {
        this.loading = false
        return throwError(error);
      }));
  }

  activatedRouteParams(data: Filter | undefined) {
    return {
      page: data?.page,
      name: data?.name,
      gender: data?.gender,
      type: data?.type,
      status: data?.status
    };
  }

  clearSearchFields() {
    this.searchForm.reset({gender: '', status: '', name: '', type: ''})
    this.router.navigate([], {
      queryParams: {},
    })
    this.loadRickMortyList()
  }

  onFilterChange() {
    let queryParams: Filter = this.searchQueryFormValue
    let item = this.checkAndClearSearchFields(queryParams)
    this.loadRickMortyList(item)
    this.router.navigate([], {queryParams: item});
  }

  nextAndBackPage(status: string, data: any) {
    const url = status === 'next' ? data.next : data.prev;
    this.page = url.match(/page=(\d+)/)[1];
    this.route.queryParams.subscribe((params: Filter) => {
      let urlQueryParams: Filter = this.activatedRouteParams(params)
      urlQueryParams.page = this.page
      this.router.navigate(['/characters'], {queryParams: urlQueryParams});
      this.loadRickMortyList(urlQueryParams)
    }).unsubscribe();
  }

  checkAndClearSearchFields(queryParams: Filter): Filter {
    const filteredParams: Filter = {};
    for (const key of Object.keys(queryParams) as (keyof Filter)[]) {
      const value = queryParams[key];
      if (value != null && value !== '') {
        filteredParams[key] = value;
      }
    }
    return filteredParams;
  }

}
