import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const VideoPlayer = () => {
  let location = useLocation()
  let { qid, course, content, number, index } = location.state


  const source = `/assets/videos/${course}/${number}.mp4`
  return (
    <div className='text-center mt-5'>
      <h1>{content.toUpperCase()} {number} </h1>
      <p className='fs-6'>Take a look at the video before starting the quiz.</p>
      <video controls width="70%" className='rounded'>
        <source src={source} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>

      <div>
        <Link to={{
          pathname: '/sketch-board',
          state: { qid, answer: number, course, index }
        }} className='btn dark-btn mt-2' >Take Quiz</Link>

      </div>
    </div>
  )
}

export default VideoPlayer;