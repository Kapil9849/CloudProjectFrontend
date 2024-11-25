import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-monthlydeaths',
  templateUrl: './monthlydeaths.component.html',
  styleUrls: ['./monthlydeaths.component.scss']
})
export class MonthlydeathsComponent implements OnInit {

  states:any[]=[];
  years:any[]=[];
  selectedState="";
  selectedYear:number=0;
  monthlyData:any[]=[];
  constructor(private globalService:GlobalService) { }

  ngOnInit(): void {
  this.getStates();
  this.getYears();
  }

  getStates()
  {
    this.globalService.getStates().subscribe((response:any)=>{
      console.log(response)
      this.states=response.states;
    })
  }

  getYears()
  {
    this.globalService.getYears().subscribe((response:any)=>{
      console.log(response)
      this.years=response.years;
    })
  }

  getMonthlyData()
  {
    console.log(this.selectedState,this.selectedYear);
    if(this.selectedState!="" && this.selectedYear!=0)
    {
      this.globalService.getMonthlyData(this.selectedYear,this.selectedState).subscribe((response:any)=>{
        console.log(response)
        this.monthlyData=response.monthly_deaths;
        const monthOrder = [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ];
        this.monthlyData.sort((a, b) => {
          return monthOrder.indexOf(a.MonthName) - monthOrder.indexOf(b.MonthName);
        });
      })
    }
  }

}
