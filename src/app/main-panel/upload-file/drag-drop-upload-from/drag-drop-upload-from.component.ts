import { Component } from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-drag-drop-upload-from',
  templateUrl: './drag-drop-upload-from.component.html',
  styleUrls: ['./drag-drop-upload-from.component.scss']
})
export class DragDropUploadFromComponent {
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {
  }

  onUpload(event) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
}
