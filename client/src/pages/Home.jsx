import {
  ListingSections,
  OfferImagesSlider,
  PerfectPlaceFinder,
} from '../components/Home'
import useHomePageData from '../hooks/useHomePageData'

function Home() {
  const { offerListings, rentListings, saleListings } = useHomePageData()
  const sections = [
    {
      title: 'Recent offers',
      listing: offerListings,
      link: '/search?offer=true',
    },
    {
      title: 'Recent places for rent',
      listing: rentListings,
      link: '/search?type=rent',
    },
    {
      title: 'Recent places for sale',
      listing: saleListings,
      link: '/search?type=sale'
    }
  ]
console.log(sections);
  return (
    <>
      <PerfectPlaceFinder />
      <OfferImagesSlider />
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {sections.map((section, index) => (
          <ListingSections
            key={index}
            title={section.title}
            listing={section.listing}
            link={section.link}
          />
        ))}
      </div>
    </>
  )
}

export default Home
