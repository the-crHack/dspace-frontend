// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-render-html',
//   template: '<div [innerHTML]="fileContent"></div>'
// })
// export class RenderHtmlComponent {
//   fileContent: string;

//   constructor(private http: HttpClient) {
//     // Here, you can make an HTTP request to get the file content from the server.
//     this.http.get('http://example.com/path/to/file.html', { responseType: 'text' }).subscribe((content: string) => {
//       this.fileContent = content;
//     });
//   }
// }