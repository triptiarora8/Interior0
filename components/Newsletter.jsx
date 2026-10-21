"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setJoined(true);
  };

  return (
    <form className="newsletter" onSubmit={onSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={joined ? "Thank you — welcome aboard." : "Your email address"}
        aria-label="Email address"
        required
      />
      <button type="submit">Join</button>
    </form>
  );
}
