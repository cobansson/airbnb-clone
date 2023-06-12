import "./App.css";
import heroImage from "./hero-images/hero-img.png";
import Card from "./Card";
import { lessonsInfo } from "./Data";

function Hero() {
  return (
    <div className="hero-section">
      <img className="hero-img" src={heroImage}></img>
      <div className="hero-text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

function Cards() {
  const lessonList = lessonsInfo.map((lesson) => (
    <Card key={lesson.id} {...lesson} />
  ));
  return <ul>{lessonList}</ul>;
}

export default function Main() {
  return (
    <main>
      <Hero />
      <Cards />
    </main>
  );
}
