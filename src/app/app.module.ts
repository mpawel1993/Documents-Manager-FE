import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { FooterComponent } from './footer/footer.component';
import { UploadFileComponent } from './main-panel/upload-file/upload-file.component';
import { SearchFileComponent } from './main-panel/search-file/search-file.component';
import { AdminPageComponent } from './main-panel/admin-page/admin-page.component';
import {MatButtonModule} from '@angular/material/button';
import {UploadFromComponent} from './main-panel/upload-file/upload-from/upload-from.component';
import {DragDropUploadFromComponent} from './main-panel/upload-file/drag-drop-upload-from/drag-drop-upload-from.component';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {MessageService} from "primeng/api";
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatChipsModule} from "@angular/material/chips";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPanelComponent,
    FooterComponent,
    UploadFileComponent,
    SearchFileComponent,
    AdminPageComponent,
    UploadFromComponent,
    DragDropUploadFromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FileUploadModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatChipsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
