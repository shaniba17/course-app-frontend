import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewCourse = () => {
    const [data, changedata] = useState([])
    const fetchData = () => {
        axios.get("http://localhost:8080/view").then(
            (response) => {
                console.log(response.data)
                changedata(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    useEffect(() => { fetchData() }, [])
  return (
    <div>
        <div>
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
                    {
                        data.map(
                            (value, index) => {
                                return <tr>
                                   <td>{value.courseTitle}</td>
                                   <td>{value.courseDescription}</td>
                                   <td>{value.courseDate}</td>
                                   <td>{value.duration}</td>
                                   <td>{value.venue}</td>
                                   <td>{value.trainerName}</td>
                                </tr>
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ViewCourse