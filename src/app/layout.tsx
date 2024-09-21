import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export const metadata: Metadata = {
    title: "StudyRacer - Gamified Learning Platform",
    description: "Boost your study performance with StudyRacer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={`${GeistSans.className} flex flex-col min-h-screen`}>
        <Sidebar />
        <div className="flex flex-grow ml-20 transition-all duration-300 p-4">
            <main className="flex-grow">{children}</main>
        </div>
        <Footer />
        </body>
        </html>
    );
}