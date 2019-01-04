import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule } from '@angular/common/http';
import { DataTableModule } from 'angular-6-datatable';
import { DemoDashboardComponent } from './demo-dashboard/demo-dashboard.component';
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchnamePipe } from './searchname.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DemoDashboardComponent,
    EditDetailComponent,
    SearchnamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SmartTableModule,
    HttpClientModule,
    DataTableModule,  ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
