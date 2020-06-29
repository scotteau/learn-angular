import {Injectable} from '@angular/core';
import {Item} from '../app.component';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  items$: Observable<Item[]>;

  constructor(private http: HttpClient) {
    this.items$ = this.http.get<Item[]>('/assets/Data/data.json');
  }
}
