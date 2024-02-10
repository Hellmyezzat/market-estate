import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Contact({ listing }) {
  const { currentUser } = useSelector((state) => state.user)
  const [contact, setContact] = useState(false)
  const [landlord, setLandLord] = useState(null)
  const [message, setMessage] = useState('')

  const handleChangeMessage = (e) => {
    setMessage(e.target.value)
  }

  useEffect(() => {
    const fetchLandLord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`)
        const data = await res.json()
        setLandLord(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchLandLord()
  }, [listing.userRef])

  return (
    <>
      {!contact && currentUser && listing.userRef !== currentUser._id && (
        <button
          onClick={() => setContact(true)}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase w-full"
        >
          Contact landlord
        </button>
      )}
      {contact && landlord && (
        <div className="flex flex-col gap-5">
          <p>
            Contact <span className="font-semibold">{landlord.username}</span>{' '}
            for <span className="font-semibold">{listing.name}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="2"
            onChange={handleChangeMessage}
            value={message}
            placeholder="Enter your message here..."
            className="w-full border p-3 rounded-lg"
          ></textarea>
          <a
            href={`mailto:${
              landlord.email
            }?subject=Regarding ${encodeURIComponent(
              listing.name
            )}&body=${encodeURIComponent(message)}`}
            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
          >
            Send Message
          </a>
        </div>
      )}
    </>
  )
}

export default Contact