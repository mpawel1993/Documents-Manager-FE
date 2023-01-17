import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UploadFileComponent} from "./main-panel/upload-file/upload-file.component";
import {SearchFileComponent} from "./main-panel/search-file/search-file.component";
import {AdminPageComponent} from "./main-panel/admin-page/admin-page.component";

const routes: Routes = [
  { path: 'upload-file', component: UploadFileComponent },
  { path: 'search-files', component: SearchFileComponent },
  { path: 'admin-page', component: AdminPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
