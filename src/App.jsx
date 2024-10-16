import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./layout"
import { Home, Login, MasterWarga } from "./pages"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/master-warga" element={<MasterWarga />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
