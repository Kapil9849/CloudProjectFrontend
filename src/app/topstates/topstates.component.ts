import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-topstates',
  templateUrl: './topstates.component.html',
  styleUrls: ['./topstates.component.scss']
})
export class TopstatesComponent implements OnInit {

  limit:any[]=[];
  selectedLimit:number=0;
  data:any[]=[];
  constructor(private globalService:GlobalService) { }

  ngOnInit(): void {
    for(let i=0;i<50;i++)
    {
      this.limit.push({"value":i+1})
    }
  }

  gettopData()
  {
    this.data=[];
    console.log(this.selectedLimit);
    if(this.selectedLimit!=0)
    {
      this.globalService.getTopStatesdata(this.selectedLimit).subscribe((response:any)=>{
        console.log(response)
        this.data=response.top_states_by_incident_count;

      })
    }
  }
}
