import { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function SearchForm() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set('searchTerm', searchTerm)
    const searchQuery = urlParams.toString()
    navigate(`/search?${searchQuery}`)
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const searchTermFromUrl = urlParams.get('searchTerm')
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl)
    }
  }, [location.search])
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-100 p-3 rounded-lg flex items-center"
    >
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="Search..."
        className="bg-transparent focus:outline-none w-24 sm:w-64"
      />
      <button>
        <FaSearch className="text-slate-600" />
      </button>
    </form>
  )
}

export default SearchForm
