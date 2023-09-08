import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private baseUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  uploadService(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${this.baseUrl}/upload`, formData)
  }

  getResult(){
    return this.http.get(`${this.baseUrl}/find/SE`)
  }
}