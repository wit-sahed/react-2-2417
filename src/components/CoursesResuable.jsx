import React from 'react'
import { FaBars } from "react-icons/fa";

const CoursesResuable = ({photo, heading, description}) => {
  return (
    <>
      <section>
        <div className="container">
            <div style={{width: '25%'}}>
                <img style={{width: '100%'}} src={photo} alt="" />
                <h1 style={{color: 'red'}}>{heading}</h1>
                <p>{description}</p>
                <h4>Hello World<FaBars/></h4>
                
            </div>
        </div>
    </section>
    </>
  )
}

export default CoursesResuable
