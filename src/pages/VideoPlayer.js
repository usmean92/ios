import React from 'react'
import { useLocation } from 'react-router-dom'

export const VideoPlayer = () => {
  let location = useLocation()
  let { course, content, number } = location.state

  const source = `/assets/videos/${course}/${course} ${number}.mp4`
  return (
    <div className='container text-center mt-5'>
      <h1>THE {content.toUpperCase()} {number} </h1>
      <p className='fs-6'>Take a look at the video before starting the quiz.</p>
      <video controls width="80%" className='rounded'>
        <source src={source} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      <button className=''></button>
    </div>
  )
}