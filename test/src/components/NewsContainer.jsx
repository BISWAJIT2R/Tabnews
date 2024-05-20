import React from 'react'

const NewsContainer = ({Children}) => {
  return (
    <div className="news-container">
          {Children}
    </div>
  )
}

export default NewsContainer