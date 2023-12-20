import { BrowserRouter, Route, Routes } from "react-router-dom"
import Page from "./routes/Page/Index"
import Home from "./routes/Page/Home/Index"
import Search from "./routes/Page/Search/Index"



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Page />}>
              <Route index element = {<Home/>} />
              <Route path="/search" element={<Search/>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
