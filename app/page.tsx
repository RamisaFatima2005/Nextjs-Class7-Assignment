import AllProd from "./components/AllProd"
import BestProd from "./components/BestProd"
import Contact from "./components/Contact"
import HomePage from "./components/Home"

function page() {
  return (
    <>
    <div>
    <HomePage/>
    <div className="bg-white h-10 w-auto"></div>
    <BestProd/>
    <div className="bg-white h-10 w-auto"></div>
    <AllProd/>
    <div className="bg-white h-10 w-auto"></div>
    <Contact/>
    </div>
    </>
  )
}

export default page