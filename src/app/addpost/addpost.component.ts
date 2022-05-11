import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PubService } from '../pub.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  pubForm?: FormGroup;
  submitted=false;

  constructor(private pubService:PubService,private router:Router) { }

  ngOnInit(): void {
    this.pubForm = new FormGroup({
      Title: new FormControl('', [Validators.required]),
      Description: new FormControl('', [Validators.required]),
      Categorie: new FormControl('', [Validators.required]),
      Date: new FormControl('', [Validators.required]),
    })
  }

  Add() {
    this.submitted = true
    if(this.pubForm?.invalid){
      return;
    }
    this.pubService.createPub(this.pubForm?.value)
      .subscribe((response: any) => {
        this.router.navigateByUrl('/list')
      }
        , (error: any) => { console.log('error') })
  }
}
