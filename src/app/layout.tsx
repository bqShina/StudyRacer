import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { SidebarProvider } from "../components/SidebarContext";

export const metadata: Metadata = {
    title: "StudyRacer - Gamified Learning Platform",
    description: "Boost your study performance with StudyRacer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <SidebarProvider>
            <body className={`${GeistSans.className} flex flex-col min-h-screen`}>
            <div className="flex flex-grow">
                <Sidebar />
                <div className="flex-grow transition-all duration-300 ml-20 md:ml-64">
                    <main className="p-4">{children}</main>
                </div>
            </div>
            <Footer/>
            </body>
        </SidebarProvider>
        </html>
    );
}
