import React from 'react'
import CoursesReusable from './CoursesResuable'
import Img from '../assets/image.png'

const Courses = () => {

  return (
    <>
      <div style={{display: 'flex', gap: '20px'}}>
        <CoursesReusable photo={Img} heading='Web Design Fundamentals' description='Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.' />
        <CoursesReusable photo={Img} heading='UI/UX Design' description='Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.'/>
        <CoursesReusable/>
        <CoursesReusable/>
        <CoursesReusable/>
        <CoursesReusable/>
      </div>
    </>
  )
}

export default Courses
