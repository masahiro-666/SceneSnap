import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Movies from "../components/movies"

function home(){
    return(
        <>
            <div className="app-container">
                <div className="max-md:hidden">
                    <Navbar/>
                </div>
                <div className="bg-white rounded-t-3xl px-5 mt-1 py-1 md:hidden pb-60 h-full relative">
                    <Movies/>
                </div>
                <div className="max-md:hidden">
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default home