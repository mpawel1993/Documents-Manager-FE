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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPanelComponent,
    FooterComponent,
    UploadFileComponent,
    SearchFileComponent,
    AdminPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
