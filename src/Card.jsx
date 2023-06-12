import starLogo from "./main-images/star.png";
import ellipse from "./main-images/ellipse.png";

export default function Card(lesson) {
  let badgeText;
  if (lesson.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (lesson.status === "ONLINE") {
    badgeText = "ONLINE";
  }
  return (
    <li key={lesson.id}>
      {badgeText && <div className="open-spots-badge">{badgeText}</div>}
      <div className="cards-section">
        <img className="card-img" src={lesson.image} />
        <div className="card-info">
          <div className="card-rate-and-location-section">
            <img className="star-logo" src={starLogo} />
            <h4>{lesson.rating}</h4>
            <p>({lesson.comments})</p>
            <img className="ellipse" src={ellipse} />
            <p>{lesson.location}</p>
          </div>
          <p className="lesson-lecture">{lesson.lecture}</p>
          <h2>
            From ${lesson.price} <span className="span">/ person</span>
          </h2>
        </div>
      </div>
    </li>
  );
}
