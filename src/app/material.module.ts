import { NgModule } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
 declarations: [],
 imports: [MatBadgeModule, MatButtonModule, MatNativeDateModule, HttpClientModule, 
  MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatTabsModule],
 exports: [MatBadgeModule, MatButtonModule, MatNativeDateModule, HttpClientModule,
  MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatTabsModule],
 providers: [],
 bootstrap: []
})
export class MaterialModule { }