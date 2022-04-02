import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getQualifications(): Observable<string[]> {
    return of(['B.Tech','BE','Deploma','M.Tech']);
  }
  getExperiences(): Observable<string[]> {
    return of(['Fresher','Less than zero','1 Year','2 Years','3 Years','4 Years','5 Years','More than five years']);
  }


  constructor() { }
}
