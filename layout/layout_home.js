import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import styles from "../styles/Navbar.module.css"

export default function Layout( { children }){
    return (
            <>
                <Navbar />
                    {children}
                <Footer />
            </>
        );
}
