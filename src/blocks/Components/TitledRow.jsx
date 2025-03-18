import React from "react";
import TiltedCard from "./TiltedCard/TiltedCard";

class TitleRow extends React.Component {
  render() {
    return (
      <div className="tilted-card-container">
        <TiltedCard
          imageSrc="https://picsum.photos/id/237/300/300"
          captionText="Card 1"
        />
        <TiltedCard
          imageSrc="https://picsum.photos/id/238/300/300"
          captionText="Card 2"
        />
        <TiltedCard
          imageSrc="https://picsum.photos/id/239/300/300"
          captionText="Card 3"
        />
        <TiltedCard
          imageSrc="https://picsum.photos/id/240/300/300"
          captionText="Card 4"
        />
        <TiltedCard
          imageSrc="https://picsum.photos/id/241/300/300"
          captionText="Card 5"
        />
      </div>
    );
  }
}

export default TitleRow;