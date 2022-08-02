import { useState, useContext } from "react";
import { Button, HeaderText } from "./StyledComponents";
import LabeledTextInput from "./LabeledTextInput";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { fetchTestUserDataByEmail } from "../api/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginError, setShowLoginError] = useState(false);

  const { setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const user = fetchTestUserDataByEmail(email);
    if (user && password === "abc123") {
      console.log("user is: ", user);
      setShowLoginError(false);
      setLoggedInUser(user);
      navigate("/card-builder");
    } else {
      setShowLoginError(true);
    }
  }
  return (
    <>
      <HeaderText>Login</HeaderText>
      <form onSubmit={handleSubmit}>
        <LabeledTextInput name="Email" value={email} setValue={setEmail} />
        <LabeledTextInput
          name="Password"
          value={password}
          setValue={setPassword}
          inputType="password"
        />
        <Button primary type="submit">
          Login
        </Button>
      </form>
      {showLoginError && <div>User not found.</div>}
    </>
  );
}
