import { Balthazar } from "next/font/google";
import "./globals.css";

const balthazar = Balthazar({ subsets: ["latin"], weight: '400' });

export const metadata = {
	title: "Campaign Companion",
	description: "A tool to help a GM or DM organize their TTRPG campaign",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${balthazar.className} w-full h-full`}>
				{children}
			</body>
		</html>
	);
}
