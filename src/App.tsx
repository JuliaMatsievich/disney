import "./App.css"
import { MainPage } from "./pages/mainPage"
import { GlobalStyle } from "./styles/globalStyles.styles"
// import { Counter } from "./features/counter/Counter"
// import { Quotes } from "./features/quotes/Quotes"
// import logo from "./logo.svg"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainPage />
    </>
  )
}

export default App
