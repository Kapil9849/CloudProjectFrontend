import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-policedata',
  templateUrl: './policedata.component.html',
  styleUrls: ['./policedata.component.scss']
})
export class PolicedataComponent implements OnInit {

  years:any[]=[];
  selectedYear:number=0;
  policeData:any[]=[];
  constructor(private globalService:GlobalService) { }

  ngOnInit(): void {
  this.getYears();
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
    this.policeData=[];
    console.log(this.selectedYear);
    if(this.selectedYear!=0)
    {
      this.globalService.getPoliceData(this.selectedYear).subscribe((response:any)=>{
        console.log(response)
        this.policeData=response.deaths_police_involved_statewise;

      })
    }
  }

}
