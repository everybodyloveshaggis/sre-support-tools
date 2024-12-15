import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PayHoldComponent } from './pay-hold/pay-hold.component';
import { AnalysisComponent } from './analysis/analysis.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pay-hold', component: PayHoldComponent },
    { path: 'analysis', component: AnalysisComponent },
  ];