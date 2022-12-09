import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const LearningVideoPlayer = () => {
  let location = useLocation()
  let { qid, course, content, number, index } = location.state

  console.log('ff: ', location.state)


  const source = `/assets/videos/${course}/${number}.mp4`
  return (
    <div className='text-center mt-5'>
      <h1>{content.toUpperCase()} {number} </h1>
      <p className='fs-6'>Take a look at the video before starting the quiz.</p>
      <video controls width="70%" className='rounded'>
        <source src={source} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  )
}

export default LearningVideoPlayer;