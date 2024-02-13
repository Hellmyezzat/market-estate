import useHandleSearch from "../../hooks/useHandleSearch"

function SearchSideBar() {
   const {
     handleChange,
     handleSubmit,
     inputsCheck,
     sidebarData,
   } = useHandleSearch()

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
