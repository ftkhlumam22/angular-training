import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private service:StudentService) { }

  ngOnInit(): void {
    this.GetAll()
    this.service.refreshreq.subscribe(response => {
      this.GetAll()
    })
  }

  studentlist$ : any;

  GetAll(){
    this.service.GetAll().subscribe(result =>{
      this.studentlist$=result;
      console.log(this.studentlist$)
    })
  }

  AddStudent(){
    return this.service.Post(this.studentform.value).subscribe(result=>{
      this.studentform.value.fullname = '';
      this.studentform.value.class = '';
    });
  }

  DeleteStudent(id:String){
    return this.service.Delete(id).subscribe(result =>{

    })
  }

  studentform = new FormGroup({
    fullname : new FormControl(''),
    class : new FormControl('')
  })

}
