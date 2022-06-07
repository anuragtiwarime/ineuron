import React, { useState, useEffect } from "react";

function Contact() {
  const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     console.log((document.title = `You Clicked ${count}`));
  //   });
  return (
    <>
      <h1> Contact Us</h1>
      <p>Current Count is : {count}</p>
      <button
        className="btn btn-outline-primary"
        onClick={() => setCount(count + 1)}
      >
        Counter
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Counter</button>
    </>
  );
}

export default Contact;
