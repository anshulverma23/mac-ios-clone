import React, { useState, useEffect } from 'react'

const DateTime = () => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const day = now.getDate()
      const month = now.toLocaleString('en-US', { month: 'short' }).toLowerCase()
      const hours = now.getHours() % 12 || 12
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const ampm = now.getHours() >= 12 ? 'pm' : 'am'

      setDateTime(`${day} ${month} ${hours}:${minutes}${ampm}`)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      {dateTime}
    </div>
  )
}

export default DateTime
