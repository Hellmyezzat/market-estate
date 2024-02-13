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

const useHandleSearch = () => {
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
        console.log(error)
        setLoading(false)
      }
    }
    fetchListings()
  }, [location.search])

  return {
    handleChange,
    handleSubmit,
    inputsCheck,
    listings,
    setListings,
    loading,
    navigate,
    sidebarData,
    setSidebarData,
  }
}

export default useHandleSearch
