import React, { useState } from 'react'
import Form from './Form'
import { useSelector } from 'react-redux'

const Home = () => {

  // const stddata = useSelector(state => state.stddata);
  const stddata=useSelector(state => state.studentdata);
  const stdnewdata=useSelector(state => state.addstddata);


 
  
  console.log(stdnewdata);
  return (
    <>
      <div className='container '>
        <div className='row' >
          <div className='col-12 border border-5 border-danger  mx-1 '>
            <div className='col-12 border border-2 border-danger my-1'>

              <div className='row border-bottom border-danger border-5 mx-1'>
                <div className='col-2'>
                  <img className=' img-fluid p-4 pl-5 ' src={require('../data/logo.png')} alt='react-image' />
                </div>
                <div className='col-10 ' >
                  <div className='text-center text-sm mytext'>
                    श्रम मंत्रालय द्वार पंजिकरत
                  </div>

                  <div className='text-center h2 mytextcolor'>
                    भारतीय बहु कौशल विकास संस्थान
                  </div>

                  <div className='text-center h5 mytextcolor'>
                    Indian Institute Of Multi Skills Developmenent
                  </div>
                  <div className='text-center h6'>
                    Regd. Under Ministry of MSME Govt. Of India
                  </div>
                  <div className='text-center h6'>
                    ISO Certified: 9001-2015
                  </div>
                  <div className='text-center h6'>
                    QMS,MSDE,ECA,Copr.MHRD,MLE,CVC,QCI,AECED,INA
                  </div>
                </div >

              </div>
              <div className='col-12 text-center mt-5'>
                <img src={require('../data/upper_mrk.png')} alt='react-image' />

              </div>
              <div className='col-12 text-center h1  mytextcolor'>
                Marksheet
              </div>

              <div className='col-12 text-center'>
                <img src={require('../data/bottom_mrk.png')} alt='react-image' />

              </div>
              <div className='col-12 text-center h4 mt-5 font-italic fst-italic mystyle'>
                Examination session:........................
              </div>

              <div className='row p-5 fst-italic mystyle'>
                <div className='col-6'>
                  <div>
                    Roll no:{(stddata?.rollno || "1")}
                  </div>
                  <div>
                    Student Name:{stddata?.stdname}
                  </div><div>
                    Course:{stddata?.course}
                  </div><div>
                    Institute:{stddata?.institute}
                  </div>
                </div>
                <div className='col-6'>
                  <div>
                    Enrollment No.:{stddata?.enroll}

                  </div>
                  <div>
                    Father Name:{stddata?.fname}

                  </div>
                  <div>
                    Exam Held:{stddata?.examheld}

                  </div>
                  <div>
                    Year/Semester:{stddata?.year}

                  </div>


                </div>
              </div>




              <table class="table table-bordered w-75 text-center mx-auto" >
                <thead>
                  <tr>
                    <th>S.no</th>
                    <th style={{ width: '45%' }}>Subject</th>
                   
                     
                    <th colspan="2" className='text-center '> Max Marks <br></br>Theory<span className='ps-5'>Practical</span></th>
                    <th colspan="2" className='text-center '>Marks Obtain<br></br>Theory<span className='ps-5'>Practical</span></th>


                  </tr>
                </thead>
                <tbody>
                 {stdnewdata.map((newdata,index)=>{

                  console.log(newdata.subject);
                  return(
                  <tr>
                    <th scope="row">{index+1}</th>
                    <td>{newdata?.subject}</td>
                    <td>{(newdata?.maxmarkst)?(newdata?.maxmarkst):""}</td>
                    <td>{(newdata?.maxmarksp)?(newdata?.maxmarksp):""}</td>
                    <td>{(newdata?.markst)?(newdata?.markst):""}</td>
                    <td>{(newdata?.marksp)?(newdata?.marksp):""}</td>

                  </tr>
                  );
                 })}

                    
                 
                
                  {/* <tr>
                    <th scope="row">2</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                  </tr> */}
                  <tr>
                    <th scope="row"></th>
                    <td className='fw-bold'>Total</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>

                  </tr>
                  <tr>
                    <th scope="row" colSpan="6" className='center'> Grand Total</th>

                  </tr>
                  <tr>
                    <td scope="row" colSpan="6" className='center'>
                      <div className='container mytext2'>
                        <div className='row'>

                          <div className='col'>
                            Grading
                          </div>
                          <div className='col'>
                          A+(85%+)Excellent
                          </div>
                          <div className='col'>
                            A(71-84%)Very good
                          </div>
                          <div className='col'>
                            B(61-70%)Good
                          </div>
                          <div className='col'>
                            C(50-60%)Satisfactory
                          </div>

                        </div>
                      </div>


                    </td>

                  </tr>
                </tbody>
              </table>

              <div className='col-12 text-center mt-5'>
                <img src={require('../data/bottom_icons.png')} alt='react-image' />
              </div>
              <div className='container fw-bold h5'>
                <div className='row text-center '>
                  <div className='col'>
                    Managing Director
                  </div>
                  <div className='col'>
                    Exam Controller
                  </div>

                </div>

              </div>


              <div className='container fw-bold'>
                <div className='row text-center mt-5 fs-6'>
                  <div className='col-5 '>
                    Issue Date:
                  </div>
                  <div className='col-7 '>
                    <div>For diploma verification Login to: www.iimsd.org</div>
                  </div>

                </div>

              </div>



            </div>


          </div>

        </div>

      </div>

    </>
  )
}

export default Home
