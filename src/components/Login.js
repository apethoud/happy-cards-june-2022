import { useState, useContext } from "react";
import { Button, HeaderText } from "./StyledComponents";
import LabeledTextInput from "./LabeledTextInput";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const validUser = {
  id: 1,
  name: "Andrew",
  email: "andrew@email.com",
  password: "abc123",
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginError, setShowLoginError] = useState(false);

  const { setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (email === validUser.email && password === validUser.password) {
      setShowLoginError(false);
      setLoggedInUser(validUser);
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
