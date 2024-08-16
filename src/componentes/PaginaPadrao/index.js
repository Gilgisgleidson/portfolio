import Banner from "componentes/Banner"
import { Outlet } from "react-router-dom"

const PaginaPadrao = () => {
  return (
    <main style={{backgroundColor:"#111"}}>
        <Banner />

        <Outlet />
    </main>
  )
}

export default PaginaPadrao