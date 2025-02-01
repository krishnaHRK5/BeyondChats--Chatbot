import React from 'react'

const dummyData = [
  {page: 'Home', status: 'scraped'},
  {page: 'About Us', status: 'pending'},
]

const ShowWebpages = () => {
  return (
    <div>
      <h2>Detected Webpages</h2>
      <ul>
        {dummyData.map((data, index) => (
          <li key={index}>
            {data.page} - {data.status}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShowWebpages
