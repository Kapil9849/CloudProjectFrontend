import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';
import { HomeComponent } from './home/home.component';
import { MonthlydeathsComponent } from './monthlydeaths/monthlydeaths.component';
import {DropdownModule} from 'primeng/dropdown';
import { YearlydeathsComponent } from './yearlydeaths/yearlydeaths.component';
import { AgedataComponent } from './agedata/agedata.component';
import { PolicedataComponent } from './policedata/policedata.component';
import { TopstatesComponent } from './topstates/topstates.component';
import { DeathtypesComponent } from './deathtypes/deathtypes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MonthlydeathsComponent,
    YearlydeathsComponent,
    AgedataComponent,
    PolicedataComponent,
    TopstatesComponent,
    DeathtypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CardModule,
    TableModule,
    TabViewModule,
    InputTextModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
