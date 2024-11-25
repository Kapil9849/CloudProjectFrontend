import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-yearlydeaths',
  templateUrl: './yearlydeaths.component.html',
  styleUrls: ['./yearlydeaths.component.scss']
})
export class YearlydeathsComponent implements OnInit {

  states:any[]=[];
  selectedState="";
  yearlyData:any[]=[];
  constructor(private globalService:GlobalService) { }

  ngOnInit(): void {
  this.getStates();
  }

  getStates()
  {
    this.globalService.getStates().subscribe((response:any)=>{
      console.log(response)
      this.states=response.states;
    })
  }

  getMonthlyData()
  {
    this.yearlyData=[];
    console.log(this.selectedState);
    if(this.selectedState!="")
    {
      this.globalService.getYearlyData(this.selectedState).subscribe((response:any)=>{
        console.log(response)
        this.yearlyData=response.yearly_deaths;

      })
    }
  }

}
