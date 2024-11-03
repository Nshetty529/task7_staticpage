import React from 'react';

function Contact() {
  const style = {
    backgroundImage: "url('https://images.unsplash.com/photo-1517841905240-4729883df127?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGl0JTIwY29udGFjdHxlbnwwfHx8fDE2MTkxNTY1MTU&ixlib=rb-1.2.1&q=80&w=1080')",
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  return (
    <div style={style}>
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us for any inquiries.</p>
    </div>
  );
}

export default Contact;
