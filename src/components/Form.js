import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setstddata ,adddformdata} from '../redux/Formslice'

const Form = () => {

const dispatch = useDispatch();

const [formdata,setformdata]=useState({
rollno:"",
enroll:"",
stdname:"",
fname:"",
course:"",
examheld:"",
institute:"",
year:"",
maxmarkst:"",
maxmarksp:"",
markst:"",
marksp:"",
subject:"",


  });

  const [narksformdata,setmarksformdata]=useState({
 
    maxmarkst:"",
    maxmarksp:"",
    markst:"",
    marksp:"",
    subject:"",
    
    
      });


  const handleChange =(e)=>{

    const {name,value}=e.target;
    dispatch(setstddata({value,name}));
    setformdata({
      ...formdata,[name]:value,
    })
  };

const count= useSelector((state)=>state.studentdata);
console.log(count);

  const marks=() =>{

    const updatedResults = {...narksformdata};

    console.log(updatedResults);
   
    const nextrowmarks={
      'maxmarkst':count.maxmarkst,
      'maxmarksp':count.maxmarksp,
      'markst':count.markst,
      'marksp':count.marksp,
      'subject':count.subject,

    }



    setmarksformdata(nextrowmarks);


    console.log(narksformdata);
    dispatch(adddformdata(nextrowmarks));

   


  };



  return (
    <>
    
<div className='container mt-4'>
<label for="student_info" class="text-center col-12 mb-4 h1">Student Details</label>
<form class="row g-3">
  <div class="col-md-6">
    <label for="rollno" class="form-label">Roll No.</label>
    <input type="number" class="form-control" id="rollno" name="rollno" onChange={handleChange} value={count.rollno}></input>
  </div>
  <div class="col-md-6">
    <label for="enroll" class="form-label">Enrollment No</label>
    <input type="number" class="form-control" id="enroll" name="enroll" onChange={handleChange} value={count.enroll}></input>
  </div>

  <div class="col-md-6">
    <label for="stdname" class="form-label">Student name</label>
    <input type="text" class="form-control" id="stdname" name="stdname" onChange={handleChange} value={count.stdname}></input>
  </div>

  <div class="col-md-6">
    <label for="fname" class="form-label">Fathers Name</label>
    <input type="text" class="form-control" id="fname" name="fname" onChange={handleChange} value={count.fname}></input>
  </div><div class="col-md-6">
    <label for="course" class="form-label">Course</label>
    <input type="Text" class="form-control" id="course" name="course" onChange={handleChange} value={count.course}></input>
  </div>

  <div class="col-md-6">
    <label for="examheld" class="form-label">Exam Held</label>
    <input type="number" class="form-control" id="examheld" name="examheld" onChange={handleChange} value={count.examheld}></input>
  </div>

  <div class="col-md-6">
    <label for="institute" class="form-label">Institute</label>
    <input type="text" class="form-control" id="institute" name="institute" onChange={handleChange} value={count.institute}></input>
  </div>
  <div class="col-md-6">
    <label for="year" class="form-label">Year/Semester</label>
    <input type="number" class="form-control" id="year" name="year" onChange={handleChange} value={count.year}></input>
  </div>

  <div class="col-12">
   
  </div>

</form>
</div>

<div className='container mt-4 mb-4'>

<label for="student_info" class="text-center col-12 mb-4 h1">Student Marks</label> 

<form class="row g-3">
    <div className='col-12'>
<select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="subject" onChange={handleChange}>
  <option selected>Subject</option>
  <option value="hindi">Hindi</option>
  <option value="english">English</option>
  <option value="math">Math</option>
  <option value="science">Science</option>
</select>
</div>

<div class="col-md-12">
    <label for="marks" class="form-label">Marks Obtained(Theory) </label>
    <input type="number" class="form-control" id="marks" name="markst" onChange={handleChange} value={formdata.markst}></input>
  </div>

  <div class="col-md-12">
    <label for="marks" class="form-label">Marks Obtained(Practical) </label>
    <input type="number" class="form-control" id="marks" name="marksp" onChange={handleChange} value={formdata.marksp}></input>
  </div>

  <div class="col-md-12">
    <label for="marks" class="form-label"> Max Marks(Thoery)</label>
    <input type="number" class="form-control" id="maxmarks" name="maxmarkst" onChange={handleChange} value={formdata.maxmarkst}></input>
  </div>
  <div class="col-md-12">
    <label for="marks" class="form-label"> Max Marks(Practical)</label>
    <input type="number" class="form-control" id="maxmarks" name="maxmarksp" onChange={handleChange} value={formdata.maxmarksp}></input>
  </div>

  
 
</form>
<button className="btn btn-primary mt-3" onClick={marks}> Submit </button>
</div>
    </>
  )
}

export default Form
