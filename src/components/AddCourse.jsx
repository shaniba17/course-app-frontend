import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const AddCourse = () => {
    const [data,setData]=useState(
        {
        "courseTitle":"",
        "courseDescription":"",
        "courseDate":"",
        "duration":"",
        "venue":"",
        "trainerName":""
            
        }
    )
    const inputHandler=(event)=>
        {
            setData({...data,[event.target.name]:event.target.value})
        }
    const readValue=()=>
        {
            console.log(data)
            axios.post("http://localhost:8080/add",data).then(
                (response)=>
                    {
                        console.log(response.data)
                        if (response.data.status=="success") {
                            alert("Successfully")
                            
                        } else {
                            alert("Error")
                            
                        }
                    }
            ).catch()
        }
  return (
    <div>
         <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <h1>
                            <u>
                                <center>Course Details</center>
                            </u>
                        </h1>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl6">
                            <label htmlFor="" className="form-label">Course Title</label>
                            <input type="text" className="form-control" name='courseTitle' value={data.courseTitle} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl6">
                            <label htmlFor="" className="form-label">Course Description</label>
                            <input type="text" className="form-control" name='courseDescription' value={data.courseDescription} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl6">
                            <label htmlFor="" className="form-label">Course Date</label>
                            <input type="date" name="courseDate" id="" className="form-control" value={data.courseDate} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl6">
                            <label htmlFor="" className="form-label">Duration</label>
                            <input type="text" className="form-control" name='duration' value={data.duration} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl6">
                            <label htmlFor="" className="form-label">Venue</label>
                            <input type="text" className="form-control" name='venue' value={data.venue} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl6">
                            <label htmlFor="" className="form-label">Trainer Name</label>
                            <input type="text" className="form-control" name='trainerName' value={data.trainerName} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl6">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AddCourse