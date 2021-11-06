import { NgModule } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
 declarations: [],
 imports: [MatBadgeModule, MatButtonModule],
 exports: [MatBadgeModule, MatButtonModule],
 providers: [],
 bootstrap: []
})
export class MaterialModule { }