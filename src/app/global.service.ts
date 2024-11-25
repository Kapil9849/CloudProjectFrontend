import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService{

  api_endpoint:string="http://127.0.0.1:8000/";

  constructor(private http:HttpClient) { }

  getStates()
  {
    return this.http.get(this.api_endpoint+"getstates");
  }

  getYears()
  {
    return this.http.get(this.api_endpoint+"getyears");
  }

  getMonthlyData(year:number,state:string)
  {
    return this.http.get(this.api_endpoint+"deaths/monthly?year="+year+"&state="+state)
  }

  getYearlyData(state:string)
  {
    return this.http.get(this.api_endpoint+"deaths/yearly?state="+state)
  }

  getAgeData(year:number,state:string):Observable<any>
  {
    return this.http.get(this.api_endpoint+"deaths/age-group?year="+year+"&state="+state)
  }

  getPoliceData(year:number)
  {
    return this.http.get(this.api_endpoint+"deaths/police-involved?year="+year)
  }

  getTopStatesdata(limit:number)
  {
    return this.http.get(this.api_endpoint+"deaths/top-states?limit="+limit)
  }

  getdeathtype(year:number,state:string)
  {
    return this.http.get(this.api_endpoint+"deaths/type-of-deaths?year="+year+"&state="+state)
  }
}
