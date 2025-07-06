import React from 'react'
import './Title.css'

const Title = ({Title, showViewAll = true}) => {
  return (
    <div className='title-container'>
      <h4 className='title'>{Title}</h4>
      {showViewAll && <a href="#" className='view-all'>View All</a>}
    </div>
  )
}

export default Title
