import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout/layout"
import { MainPage } from "./pages/mainPage"
import { CharacterDetailedPage } from "./pages/detailedPage"
import { NotFound } from "./pages/notfound"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="character/:id" element={<CharacterDetailedPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
