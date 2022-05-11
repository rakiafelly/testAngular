import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PubService {
  constructor(private http:HttpClient) { }
  createPub(data:any){
   return this.http.post("http://localhost:3000/pub",data)
  }

  getPub(){
    return this.http.get("http://localhost:3000/pub" )
  }
  deletePub(id:any){
    return this.http.delete("http://localhost:3000/pub/"+id);
  }
  updatePub(id:any,data:any){
      return this.http.put("http://localhost:3000/pub/"+id,data )
  
    }
  }

