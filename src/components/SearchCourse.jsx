import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const SearchCourse = () => {
    const [data, setData] = useState(
        {
            "courseTitle": ""
        }
    )

    const [result, setresult] = useState([])
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const deleteCourse=(id)=>
        {
            let input={"_id":id}
            axios.post("http://localhost:8080/delete",input).then(
                (response)=>{
                    console.log(response.data)
                    if (response.data.status=="success") {
                        alert("successfully completed")
                    } else {
                        alert("error")
                    }
                }
            ).catch()
            
        }

    const readValue = () => {
        console.log(data)
        axios.get("http://localhost:8080/search", data).then(
            (response) => {
                setresult(response.data)
            }

        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        )

    }

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Course Title</label>
                                <input type="text" className="form-control" name='courseTitle' value={data.courseTitle} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Course Title</th>
                                <th scope="col">Course Description</th>
                                <th scope="col">Course Date</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Venue</th>
                                <th scope="col">Trainer Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result.map(
                                (value, index) => {
                                    return <tr>
                                        <td>{value.courseTitle}</td>
                                        <td>{value.courseDescription}</td>
                                        <td>{value.courseDate}</td>
                                        <td>{value.duration}</td>
                                        <td>{value.venue}</td>
                                        <td>{value.trainerName}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={()=>deleteCourse(value._id)}>Delete</button>
                                        </td>
                                    </tr>
                                }
                            )}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SearchCourse