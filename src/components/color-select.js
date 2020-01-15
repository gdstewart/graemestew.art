import React from "react";
import { IoMdColorFill } from "react-icons/io";

const colors = ["#F08080", "#F0E68C", "#3CB371", "#20B2AA", "#1E90FF", "#9370DB", "#DB7093", "#696969"];

export function setAccentColor() {
    var accentColor = colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.setProperty("--accent-color", accentColor);
}

export default function ColorSelect({ children }) {
    return (
        <div
            className="color-select"
            role="button"
            tabIndex={0}
            onClick={() => setAccentColor()}
            onKeyDown={() => setAccentColor()}>
            <IoMdColorFill />
        </div>
    );
}