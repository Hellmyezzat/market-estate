const inputsCheck = [
  { id: 'all', name: 'Rent & Sale' },
  { id: 'rent', name: 'Rent' },
  { id: 'sale', name: 'Sale' },
  { id: 'offer', name: 'Offer' },
  { id: 'parking', name: 'Parking' },
  { id: 'furnished', name: 'Furnished' },
]

function SearchSideBar() {
  return (
    <div className="md:min-h-screen md:border-r-2 border-b-2 p-7">
      <form className="flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <label className="whitespace-nowrap font-semibold">
            Search Term:
          </label>
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-lg p-3 w-full"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 ">
          {inputsCheck.map((input) => (
            <div className="flex gap-2">
              <input type="checkbox" id={input.id} className="w-5" />
              <span>{input.name}</span>
            </div>
          ))}
        </div>

        <div className="flex  items-center gap-2">
          <label className="font-semibold">Sort:</label>
          <select
            id="sort_order"
            defaultValue={'created_at_desc'}
            className="p-3 rounded-lg border"
          >
            <option value="">Price high to low</option>
            <option value="">Price low to hight</option>
            <option value="">latest</option>
            <option value="">Oldest</option>
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
