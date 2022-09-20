import Footer from "./components/Footer";
import Header from "./components/header";
export default function Home() {
    return (
        <div className=" font-fancy">
            <Header></Header>
            <div className="flex flex-col min-h-screen"></div>
            <div className="flex-grow"></div>
            <Footer></Footer>
        </div>
    );
}
