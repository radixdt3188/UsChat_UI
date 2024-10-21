import React, {useEffect, useState} from 'react'

function Dashboard() {
  const [chatData, setChatdata] = useState("")

  useEffect(() => {
    getChatData();
  }, [])
  
  const getChatData = async() => {
    try {
      const chatInfo = await fetch ('http://localhost:5000/api/chat', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!chatInfo.ok) {
        throw new Error(`HTTP error! status: ${chatInfo.status}`);
      }

      const data = await chatInfo.json()
      setChatdata(data);
    } catch (error) {
      console.error('Error fetching chat data:', error);
    }
  }

  return (
    <div>
      <h1>Welcome to the Dashboard...!</h1>
      <p>{JSON.stringify(chatData)}</p>
    </div>
  )
}

export default Dashboard
