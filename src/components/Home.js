import HighlightCard from "./HighlightCard";
import MovieCard from "./MovieCard";

// Feel free to transform this into an array of movies.
const movieData = {
  Title: "The Avengers",
  Year: "2012",
  Rated: "PG-13",
};

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
      {/* Below is an example of how you might start building a movie card. */}
      <MovieCard title={movieData.Title} />
    </div>
  );
}
