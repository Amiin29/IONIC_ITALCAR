import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HttpClientModule } from '@angular/common/http'; 

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ProviderService } from '../service/provider.service';
import { HttpModule } from '@angular/http';

@NgModule({
  providers :[
    ProviderService,
  ],
  imports: [
    IonicModule,
     HttpModule, 
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    HttpClientModule
  ],
 
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
