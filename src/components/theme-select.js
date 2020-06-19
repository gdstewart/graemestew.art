import React from "react";
import { WiMoonAltThirdQuarter } from "react-icons/wi";

var themeColor = "#000";
var themeColorAlt = "#FFF";

export function setThemeColor() {
    if (themeColor === "#000") {
        themeColor = "#FFF";
        themeColorAlt = "#000";
    } else {
        themeColor = "#000";
        themeColorAlt = "#FFF";
    }
    document.documentElement.style.setProperty("--theme-color", themeColor);
    document.documentElement.style.setProperty("--theme-color-alt", themeColorAlt)
}

export default function ThemeSelect({ children }) {
    return (
        <div
            className="theme-select"
            role="button"
            tabIndex={0}
            onClick={() => setThemeColor()}
            onKeyDown={() => setThemeColor()}>
            <WiMoonAltThirdQuarter />
        </div>
    );
}