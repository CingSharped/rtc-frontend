import React from 'react'
import { useState, useRef, useEffect } from "react";
import axios from "axios";

const ChangeUsernameForm = () => {
  const [oldUsernameInput, setOldUsernameInput] = useState("");
  const [newUsernameInput, setNewUsernameInput] = useState("");
  const inputRef = useRef();


  // Focus on username textbox
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleOldUsername = (e) => {
    e.preventDefault()
    setOldUsernameInput(e.target.value)
  }
  const handleNewUsername = (e) => {
    e.preventDefault()
    setNewUsernameInput(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // check is new username is available
    // check old username is correct
    // update username

  }

  return (
    <>
      <form onSubmit={handleSubmit} className="username-change-form">
        <h2>Change Username</h2>

        <label htmlFor="Old Username textbox">Old Username</label>
        <input
          className="input-field"
          type="text"
          placeholder="Old Username"
          aria-label="Old Username textbox"
          value={oldUsernameInput}
          onChange={handleOldUsername}
          ref={inputRef}
        />

        <label htmlFor="New Username textbox">New Username</label>
        <input
          className="input-field"
          type="text"
          placeholder="New Username"
          aria-label="New Username textbox"
          value={newUsernameInput}
          onChange={handleNewUsername}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ChangeUsernameForm