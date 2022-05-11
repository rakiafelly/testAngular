import { Component, OnInit } from '@angular/core';
import { PubService } from '../pub.service';

@Component({
  selector: 'app-listpost',
  templateUrl: './listpost.component.html',
  styleUrls: ['./listpost.component.css']
})
export class ListpostComponent implements OnInit {
pubs:any;
  constructor(private pubService:PubService) { }

  ngOnInit(): void {
    this.getAllPubs();
  }

  getAllPubs(){
    this.pubService.getPub().subscribe((response:any)=>{
      this.pubs=response;
    },(error:any)=>{console.log(error)});
  }
  delete(id:any){
      this.pubService.deletePub(id).subscribe((response:any)=>{
        this.getAllPubs();
      },(error:any)=>{console.log(error)});
    }
  }

