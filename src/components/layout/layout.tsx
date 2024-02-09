import { Outlet } from "react-router-dom"
import * as CS from "../../styles/commonStyles.styles"
import { Header } from "../header/header"

export const Layout = () => {
  return (
    <>
      <Header />
      <CS.Container>
        <Outlet />
      </CS.Container>
    </>
  )
}
