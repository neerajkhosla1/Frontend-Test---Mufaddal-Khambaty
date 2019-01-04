import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
declare let config: any;

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css']
})
export class EditDetailComponent implements OnInit {
  data: any;
  id: any;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router, private route: ActivatedRoute)  { }

  editData=this.fb.group({
    name: [''],
    author: [''],
    numberOfPages: [],
    dateOfPublication:['']
  })

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
   this.data = JSON.parse(localStorage.getItem('bookData'))
  
   /*********** Filter data By Id and Patch Value with Form **************/

   let editDetail = this.data.filter(data=> data.id == this.id)
    editDetail.forEach(element => {
      editDetail=element
      this.editData.patchValue(editDetail)
   });
    
  }

  get f(){return this.editData.controls}

/*********** Save New Changes **************/

  updateProfile(){
    let value={
      id: this.id,
      name: this.f.name.value,
      author: this.f.author.value,
      numberOfPages: this.f.numberOfPages.value,
      dateOfPublication: this.f.dateOfPublication.value
    }
    let objIndex = this.data.findIndex(data => data.id == this.id)
    this.data[objIndex] =value
    localStorage.setItem('bookData', JSON.stringify(this.data))
    this.router.navigate(['demo-dashboard'])
  }
  
  /*********** Discard Changes **************/
  
  cancelButton(){
    this.router.navigate(['demo-dashboard'])
  }
}
