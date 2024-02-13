import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const inputsCheck = [
  { id: 'all', name: 'Rent & Sale' },
  { id: 'rent', name: 'Rent' },
  { id: 'sale', name: 'Sale' },
  { id: 'offer', name: 'Offer' },
  { id: 'parking', name: 'Parking' },
  { id: 'furnished', name: 'Furnished' },
]

function SearchSideBar() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [listings, setListings] = useState([])
  const [sidebarData, setSidebarData] = useState({
    searchTerm: '',
    type: 'all',
    parking: false,
    furnished: false,
    offer: false,
    sort: 'created_at',
    order: 'desc',
  })
  console.log(listings);
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const searchTermFromUrl = urlParams.get('searchTerm')
    const typeFromUrl = urlParams.get('type')
    const parkingFromUrl = urlParams.get('parking')
    const furnishedFromUrl = urlParams.get('furnished')
    const offerFromUrl = urlParams.get('offer')
    const sortFromUrl = urlParams.get('sort')
    const orderFromUrl = urlParams.get('order')

    if (
      searchTermFromUrl ||
      typeFromUrl ||
      parkingFromUrl ||
      furnishedFromUrl ||
      offerFromUrl ||
      orderFromUrl
    ) {
      setSidebarData({
        searchTerm: searchTermFromUrl || '',
        type: typeFromUrl || 'all',
        parking: parkingFromUrl === 'true' ? true : false,
        furnished: furnishedFromUrl === 'true' ? true : false,
        offer: offerFromUrl === 'true' ? true : false,
        sort: sortFromUrl || 'created_at',
        order: orderFromUrl || 'desc',
      })
    }

    const fetchListings = async () => {
    try {
        setLoading(true)
        const searchQuery = urlParams.toString()
        const res = await fetch(`/api/listing/get?${searchQuery}`)
        const data = await res.json()
        setListings(data)
        setLoading(false)
    } catch (error) {
      console.log(error);
        setLoading(false)
      
    }
    }
    fetchListings()
  }, [location.search])

  const handleChange = (e) => {
    const { id, value, checked } = e.target
    switch (id) {
      case 'searchTerm':
        setSidebarData({ ...sidebarData, searchTerm: value })
        break
      case 'all':
      case 'rent':
      case 'sale':
        setSidebarData({ ...sidebarData, type: id })
        break
      case 'parking':
      case 'furnished':
      case 'offer':
        setSidebarData({ ...sidebarData, [id]: checked })
        break
      case 'sort_order':
        const [sort, order] = value.split('_')
        setSidebarData({
          ...sidebarData,
          sort: sort || 'created_at',
          order: order || 'desc',
        })
        break
      default:
        break
    }

    // if (['all', 'rent', 'sale'].includes(id)) {
    //   setSidebarData({ ...sidebarData, type: id })
    // }

    // if (id === 'searchTerm') {
    //   setSidebarData({ ...sidebarData, searchTerm: value })
    // }

    // if (['parking', 'furnished', 'offer'].includes(id)) {
    //   setSidebarData({
    //     ...sidebarData,
    //     [id]: checked,
    //   })
    // }
    // if (id === 'sort_order') {
    //   const sort = value.split('_')[0] || 'created_at'
    //   const order = value.split('_')[1] || 'desc'

    //   setSidebarData({ ...sidebarData, sort, order })
    // }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const urlParams = new URLSearchParams()

    urlParams.set('searchTerm', sidebarData.searchTerm)
    urlParams.set('type', sidebarData.type)
    urlParams.set('parking', sidebarData.parking)
    urlParams.set('furnished', sidebarData.furnished)
    urlParams.set('offer', sidebarData.offer)
    urlParams.set('sort', sidebarData.sort)
    urlParams.set('order', sidebarData.order)
    
    const searchQuery = urlParams.toString()
    navigate(`/search?${searchQuery}`)
  }

  return (
    <div className="md:min-h-screen md:border-r-2 border-b-2 p-7">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <input
            id="searchTerm"
            value={sidebarData.searchTerm}
            onChange={handleChange}
            type="text"
            placeholder="Search Term..."
            className="border rounded-full p-3 w-full"
          />
        </div>

        <div className="grid grid-cols-3 gap-3 items-center ">
          {inputsCheck.map((input) => (
            <div className="flex gap-2" key={input.id}>
              <input
                type="checkbox"
                id={input.id}
                className="w-5"
                onChange={handleChange}
                checked={sidebarData[input.id]}
              />
              <span className="whitespace-nowrap">{input.name}</span>
            </div>
          ))}
        </div>

        <div className="flex  items-center gap-2">
          <label className="font-semibold">Sort:</label>
          <select
            id="sort_order"
            onChange={handleChange}
            defaultValue={`${sidebarData.sort}_${sidebarData.order}`}
            className="py-3 px-4 rounded-full border "
          >
            <option value="regularPrice_desc">Price high to low</option>
            <option value="regularPrice_asc">Price low to hight</option>
            <option value="createdAt_desc">Latest</option>
            <option value="createdAt_asc">Oldest</option>
          </select>
        </div>

        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchSideBar
