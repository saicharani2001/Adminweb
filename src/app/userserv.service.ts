import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl='http://localhost:8080/api/manager';


@Injectable({
  providedIn: 'root'
})
export class UserservService {
  details:any;
  constructor(private http:HttpClient) { }
  public create(data:any){
    return this.http.post(baseUrl,data);
  }
  public get(data:any){
    return this.http.get(`${baseUrl}/${data}`);
  }
  public getAll() {
    return this.http.get(baseUrl);
  }
  public delete(data:any){
    return this.http.delete(`${baseUrl}/${data}`);
  }
  public update(id:any,data:any){
    return this.http.put(`${baseUrl}/${id}`,data);
  }
}
