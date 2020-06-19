import React from "react";
import { IoMdColorFill } from "react-icons/io";

const colors = ["#F08080", "#3CB371", "#20B2AA", "#1E90FF", "#9370DB", "#DB7093", "#696969"];
var index = 0;

export function setAccentColor() {
    if (index === colors.length) index = 0;
    var accentColor = colors[index++];
    document.documentElement.style.setProperty("--accent-color", accentColor);
}

export default function AccentSelect({ children }) {
    return (
        <div
            className="accent-select"
            role="button"
            tabIndex={0}
            onClick={() => setAccentColor()}
            onKeyDown={() => setAccentColor()}>
            <IoMdColorFill />
        </div>
    );
}