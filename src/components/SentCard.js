import { useParams } from "react-router-dom";

export default function SentCard() {
  const { cardId } = useParams();
  return (
    <>
      <div>Sent Card with an id of: {cardId}</div>
    </>
  );
}
