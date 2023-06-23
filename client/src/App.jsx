import React, { useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    try {
        // console.log('fetchData called'); // Add this line
        const response = await fetch('https://deploybe-mze8.onrender.com/api/whoami', {
        //   headers: {
        //   'Custom-Header': 'Custom Value',
        // },
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      // console.log(data);
      setMessage(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Welcome to My App</h1>
      <button onClick={fetchData}>Who I am</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
