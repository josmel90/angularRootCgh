import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ThemeModule } from '../../@theme/theme.module';
import { TestRoutingModule, routedComponents } from './test-routing.module'; 
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/data/smart-table.service';

@NgModule({
  imports: [
    ThemeModule,
    TestRoutingModule, 
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    SmartTableService,
  ], 
})
export class TestModule { }
