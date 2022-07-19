import HighlightCard from "./HighlightCard";

export default function Home() {
  return (
    <div>
      <h1 className="HeaderText">Send them a smile with HappyCards!</h1>
      <h2 style={{ fontStyle: "italic", marginTop: 40 }}>
        Choose from thousands of things...
      </h2>
      <div style={{ display: "flex" }}>
        <HighlightCard header="Select a Holiday" />
        <HighlightCard header="Pick a Design" />
        <HighlightCard header="Let Us Deliver It" />
      </div>
    </div>
  );
}
