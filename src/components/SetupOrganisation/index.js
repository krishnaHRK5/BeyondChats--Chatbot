import React, {useState} from 'react'
import './index.css'
const SetupOrganisation = () => {
  const [companyName, setCompanyName] = useState('')
  const [companyURL, setCompanyURL] = useState('')
  const [companyDescription, setCompanyDescription] = useState('')

  const handleFetchMeta = async () => {
    try {
      const response = await axios.get(`/api/fetch-meta?url=${companyURL}`)
      const metaDescription = response.data.metaDescription
      setCompanyDescription(metaDescription)
    } catch (error) {
      console.error('Error fetching meta description:', error)
    }
  }

  return (
    <>
      <h2>Setup Organisation</h2>
      <div className="home-con">
        <input
          className="input1"
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={e => setCompanyName(e.target.value)}
        />
        <input
          className="input1"
          type="text"
          placeholder="Company Website URL"
          value={companyURL}
          onChange={e => setCompanyURL(e.target.value)}
        />
        <textarea
          className="input1"
          placeholder="Company Description"
          value={companyDescription}
          onChange={e => setCompanyDescription(e.target.value)}
        />
        <button className="btn" onClick={handleFetchMeta}>
          Fetch Meta Description
        </button>
      </div>
    </>
  )
}

export default SetupOrganisation
