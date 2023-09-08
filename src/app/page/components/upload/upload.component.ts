import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  fileUpload?: File;
  fileName = 'Clique e selecione um arquivo XML';
  loading = false;
  findResult: string = '';
  disabledTextArea = true;

  constructor(private uploadService: UploadService) { }

  onSelect(event: any): void {
    
    const file: File = event.target.files[0];
    this.fileUpload = file;
    this.fileName = this.fileUpload.name;
    
  }
  
  upload(): void {
    if(this.fileUpload){
      this.loading = true;
      this.uploadService.uploadService(this.fileUpload).subscribe(resp => {
        this.getResult();
        this.loading = false;
        this.fileName = 'Clique e selecione um arquivo XML';
      }, (error => {
        this.loading = false;
        console.log("Ocorreu um errro ao enviar arquivo." + error)
      }));
    }

  }


  getResult(): void {
    this.uploadService.getResult().subscribe(resp => {
      this.disabledTextArea = false;
      var result = JSON.stringify(resp);
      this.findResult =  JSON.parse(result);
    }); 
  }


}