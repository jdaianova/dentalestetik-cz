import Homepage from "./pages/home/Homepage"
import Footer from "./widgets/footer/Footer"
import Header from "./widgets/header/Header"

function App() {

  return (
    <div className={`flex flex-col items-center w-screen
                    pt-[60px] sm:pt-[70px] lg:pt-[80px]
                    `}>
      <Header />
      <Homepage />
      <Footer />
    </div>
  )
}

export default App
