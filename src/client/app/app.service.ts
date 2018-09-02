import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material';
import { Category } from '~/app/models';

@Injectable()
export class AppService {

  url = 'data/';

  constructor(public http: HttpClient, public snackBar: MatSnackBar) {}

  getProvincias(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(this.url + 'categories.json');
  }

}
