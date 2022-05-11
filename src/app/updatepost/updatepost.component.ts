import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PubService } from '../pub.service';

@Component({
  selector: 'app-updatepost',
  templateUrl: './updatepost.component.html',
  styleUrls: ['./updatepost.component.css']
})
export class UpdatepostComponent implements OnInit {
  pubForm?: FormGroup;
id:any;
submitted=false;
  constructor(private pubService:PubService,private router:Router,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCurrentPub(); 
    this.pubForm = new FormGroup({
    Title: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),
    Categorie: new FormControl('', [Validators.required]),
    Date: new FormControl('', [Validators.required])
  })
  }
  getCurrentPub() {
    this.id = this.activateRoute.snapshot.params['id']
    this.pubService.getPub().subscribe((response: any) => {
      this.pubForm?.patchValue(response);
    }, (error: any) => { console.log(error) });
  }
  update() {
    this.submitted = true;
    if (this.pubForm?.invalid) {
      return;
    }
    this.pubService.updatePub(this.id, this.pubForm?.value)
      .subscribe((response: any) => {
        console.log(response);
        this.router.navigateByUrl('/list')
      
      }, (error: any) => { console.log(error) });
  }
}


