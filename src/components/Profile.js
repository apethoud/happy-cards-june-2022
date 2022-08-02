import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchTestSavedCardsByUserId } from "../api/api";
import { UserContext } from "../contexts/UserContext";
import ProfileCard from "./ProfileCard";

export default function Profile() {
  const [userCards, setUserCards] = useState(null);
  const {
    loggedInUser: { id, name, email, created },
  } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchedCards = fetchTestSavedCardsByUserId(id);
    setUserCards(fetchedCards);
  }, [id]);

  function handleCardClick(cardId) {
    navigate(`/sent-card/${cardId}`);
  }

  return (
    <>
      <ProfileCard cardTitle="Account Info">
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>Member since: {created}</div>
      </ProfileCard>
      <ProfileCard cardTitle="Sent Cards">
        {userCards ? (
          userCards.map((card) => (
            <div key={card.id} onClick={() => handleCardClick(card.id)}>
              {card.holidayName}
            </div>
          ))
        ) : (
          <div>No cards found.</div>
        )}
      </ProfileCard>
      <ProfileCard cardTitle="Billing">
        <div>Card: *3958</div>
      </ProfileCard>
    </>
  );
}
