import React from "react";

import "../../css/App.css";
import "../../css/Card.css";

interface ImageCardProps {
    imageSource: string
    imageAltText: string
    imageSide: "left"|"right"
    headerText: string
    cardBody: string|JSX.Element
}

export const ImageCard:React.FC<ImageCardProps> = ({
    imageSource,
    imageAltText,
    imageSide,
    headerText,
    cardBody,
}) => {
    const image = <img src={imageSource} alt={imageAltText} className="card-image" />;

    const bodyContent = (
        <div className="card-body-container">
            <h3>{headerText}</h3>
            <hr />
            {cardBody}
        </div>
    );

    const imageCardBody = imageSide === "left" ? <>{image}{bodyContent}</> : <>{bodyContent}{image}</>;

    return (
        <div className="image-card-container">
            {imageCardBody}
        </div>
    );
};
