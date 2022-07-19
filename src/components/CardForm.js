import { useState } from "react";

export default function CardForm() {
  const [recipientName, setRecipientName] = useState("");

  function handleSubmit() {
    console.log("Submitted!");
  }

  function makeUppercase(value) {
    return value.toUpperCase();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="theirName">Their Name</label>
        <input
          name="theirName"
          type="text"
          value={makeUppercase(recipientName)}
          onChange={(event) => setRecipientName(event.target.value)}
        />
      </form>
    </div>
  );
}
