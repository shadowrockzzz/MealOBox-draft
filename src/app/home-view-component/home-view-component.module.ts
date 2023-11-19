import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeViewComponentRoutingModule } from './home-view-component-routing.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeViewComponentRoutingModule
  ]
})
export class HomeViewComponentModule { }
