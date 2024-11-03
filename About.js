import React from 'react';

function About() {
  const style = {
    backgroundImage: "url('https://images.unsplash.com/photo-1604572021423-69d51b98e274?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxlbnB0eXxlbnwwfHx8fDE2MTkxNTY2MTY&ixlib=rb-1.2.1&q=80&w=1080')",
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  return (
    <div style={style}>
      <h1>About Us</h1>
      <p>We are a leading IT solutions provider.</p>
    </div>
  );
}

export default About;
