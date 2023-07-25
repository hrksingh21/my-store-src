import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forbiddenNameValidator } from '../forbidden-name.validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  constructor(private route:ActivatedRoute, private fb: FormBuilder){}
  //author = new FormControl();

  profileForm = this.fb.group({
    name: ['it-vedant',{
      validators: [Validators.required, Validators.minLength(3),
        //forbiddenNameValidator(new RegExp(/bob/,'i'))]
        forbiddenNameValidator(new RegExp(/bob$/,'i'))]
    }],
    email: ['',{
      validators: [Validators.required, Validators.email]
    }],
    mobile: [//   '',{
      //   validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10)]// }
      ],
      address : this.fb.group({
        city: [],
        state:[],
        country:[]
      })

  });

  submitProfile(): void{
    console.log(this.profileForm.value);
  }

  get nameCtrl(): FormControl{
    return this.profileForm.get('name') as FormControl;
  }

  get emailCtrl(): FormControl{
    return this.profileForm.get('email') as FormControl;
  }

  

  name!:string;
  age!:number;
  day!:number;

  ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            // console.log('params');
            // console.log('Name :'+ params['name']);
            // console.log('Name :'+ params['age']);
            this.name = params['name'];
            this.age = params['age'];
            this.day = params['day'];
    })
  }
}
