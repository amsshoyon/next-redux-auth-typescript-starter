import { createTheme } from "@mui/material";

// THIS OBJECT SHOULD BE SIMILAR TO ../tailwind.config.js
const themeConstants = {
	paper: "#FFFFFF",
	primary: {
		main: "#2d79fd",
	},
	secondary: {
		main: "#FCAE1A",
	},
	error: {
		main: "#b22222",
		dark: "#8b0000",
	},
};

export const Theme = createTheme({
	palette: {
		primary: themeConstants.primary,
		secondary: themeConstants.secondary,
		background: { paper: themeConstants.paper },
		error: themeConstants.error,
	},
});