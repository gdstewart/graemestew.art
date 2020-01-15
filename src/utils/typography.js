import Typography from "typography";
import fairyGateTheme from "typography-theme-fairy-gates";

fairyGateTheme.bodyFontFamily = ["Work Sans", "sans-serif"];
fairyGateTheme.bodyWeight = 300;
fairyGateTheme.googleFonts = [{ name: "Work Sans", styles: ["300", "400", "500", "600", "700"] }];

const typography = new Typography(fairyGateTheme);
export const { scale, rhythm, options } = typography;
export default typography;