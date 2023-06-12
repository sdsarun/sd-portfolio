import MainContent from "../components/maincontent";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer"

export default function HomePage() {
    return (
        <div className="bg-gray-100 font-mono">
            <div className="container mx-auto pt-8 pb-16">
                <Navbar />
            </div>
            <div className="container mx-auto flex gap-x-6 max-md:flex-col max-md:gap-y-32">
                <Sidebar />
                <MainContent />
            </div>
            <div className="container mx-auto">
                <Footer />
            </div>
        </div>
    )
}