import React from 'react'
import { useLocation } from 'react-router-dom'

export const PlayPoems = () => {
  const { innerWidth: width, innerHeight: height } = window;

  let location = useLocation()
  const { title, poem } = location.state
  return (
    <div className='container-fluid m-5'>
      <h1 className='text-center bolder ms-n5'> {title}</h1 >
      <p className='txt-light text-center ms-n5'>Listen to this easy poem and learn with us</p>
      <div className='row'>
        <div className='col-md-10'>
          <iframe src={poem}
            title={title} frameborder="0"
            height={height * 0.8} width={width * 0.84}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>

      </div>

    </div >
  )
}
