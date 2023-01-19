import { Component } from '@angular/core';
import { DocumentSearchService } from "./document-search-service";
import { Document } from "./document";

@Component({
  selector: 'app-search-file',
  templateUrl: './search-file.component.html',
  styleUrls: ['./search-file.component.scss']
})
export class SearchFileComponent {

  documents: Document[] = [{
    documentName: 'dcoumentName',
    issuingAuthority: 'auth',
    tags: 'tags',
    type: 'type'
  },
  {
    documentName: 'dcoumentName',
    issuingAuthority: 'auth',
    tags: 'tags',
    type: 'type'
  },
  ];

  constructor(private searchService: DocumentSearchService) { }

  ngOnInit() {
    //TODO implement getting data
  }
}
