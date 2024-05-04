import React from 'react'
import { useState, useRef, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function SupportForm() {
    const [usernameInput, setUsernameInput] = useState("");
  const [emailInput, setEmailInput] = useState("")
  const [descriptionInput, setDescriptionInput] = useState("");
  const inputRef = useRef();


  // Focus on username textbox
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleUsername = (e) => {
    e.preventDefault()
    setUsernameInput(e.target.value)
  }
  const handleEmail = (e) => {
    e.preventDefault()
    setEmailInput(e.target.value)
  }
  const handleDescription = (e) => {
    e.preventDefault()
    setDescriptionInput(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Send data to Support Ticket creating back endpoint
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="signup-container">
        <h2>Submit a Support Ticket</h2>

        <label htmlFor="username">Username</label>
        <input
          className="input-field"
          type="text"
          placeholder="Username"
          aria-label="Username textbox"
          value={usernameInput}
          onChange={handleUsername}
          ref={inputRef}
        />

        <label htmlFor="email">Email</label>
        <input
          className="input-field"
          type="email"
          placeholder="youremail@mail.com"
          aria-label="Email textbox"
          value={emailInput}
          onChange={handleEmail}
        />

        <label htmlFor="Description">Description of issue</label>
        <input
          className="input-field"
          type="text"
          placeholder="I cannot log in"
          aria-label="Support Textbox"
          value={descriptionInput}
          onChange={handleDescription}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default SupportForm