import React from "react";

import "../../css/Card.css";

export interface CardProps {
    cardHeader?: string
    cardBody: JSX.Element|string,
    buttonText?: string,
    onClick?: () => void
}

export const Card:React.FC<CardProps> = ({
    cardHeader,
    cardBody,
    buttonText,
    onClick = () => undefined,
}) => {
    const button = (buttonText && onClick)
        ? (
            <div className="card-button-container">
                <button className="card-button">{buttonText}</button>
            </div>
        )
        : <></>;

    const header = cardHeader
        ? <><h3>{cardHeader}</h3><hr /></>
        : <></>;

    return (
        <div className="card-container" onClick={onClick}>
            {header}
            {cardBody}
            {button}
        </div>
    );
};
