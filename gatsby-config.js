module.exports = {
	plugins: [
		{
			resolve: "gatsby-plugin-favicon",
			options: {
				logo: "./src/images/favicon.png",
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					yandex: false,
					windows: true
				}
			}
		},
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-plugin-typography",
			options: {
				pathToConfigModule: "src/utils/typography",
			},
		},
	],
}
