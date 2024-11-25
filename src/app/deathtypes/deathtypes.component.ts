import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-deathtypes',
  templateUrl: './deathtypes.component.html',
  styleUrls: ['./deathtypes.component.scss']
})
export class DeathtypesComponent implements OnInit {

  states:any[]=[];
  years:any[]=[];
  selectedState="";
  selectedYear:number=0;
  deathtypes:any[]=[];
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
      this.globalService.getdeathtype(this.selectedYear,this.selectedState).subscribe((response:any)=>{
        console.log(response)
        this.deathtypes=response.type_of_deaths;
      })
    }
  }

}