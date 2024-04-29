/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "games.the-afc.com",
				port: "",
				pathname: "/fantasy/static-assets/build/images/**",
			},
		],
	},
};

module.exports = nextConfig;
