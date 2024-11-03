import React from 'react';

function Home() {
  const style = {
    backgroundImage: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxlbnB0eXxlbnwwfHx8fDE2MTkxNTYzNjY&ixlib=rb-1.2.1&q=80&w=1080')",
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  return (
    <div style={style}>
      <h1>Welcome to Our IT Company</h1>
      <p>Your one-stop solution for all IT services.</p>
    </div>
  );
}

export default Home;
