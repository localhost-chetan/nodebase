import "@/app/globals.css";
import { type Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: { template: "%s | Nodebase", default: "Nodebase" },
	description:
		"Nodebase is an open-source n8n clone for workflow automation. Build, automate, and integrate tasks visually with powerful nodes, seamless integrations, and a user-friendly interface.",

	creator: "Chetan Seervi",
	keywords: [
		"n8n",
		"n8n clone",
		"workflow automation",
		"open-source",
		"automation platform",
		"integration tools",
		"visual workflow builder",
		"task automation",
		"workflow management",
		"automation software",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
