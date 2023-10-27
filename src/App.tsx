import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Dashboard from "./components/Dashboard.tsx";
import AdminPanel from "./components/AdminPanel.tsx";
import Home from "./components/Home.tsx";
import Header from "./components/Header.tsx";
import Layout from "./components/Layout.tsx";
import NotFound from "./components/NotFound.tsx";


function App() {
  return (
      <BrowserRouter>
              <Routes>
                  <Route element={<Layout/>} >
                      <Route path="/header" element={<Header/>}/>
                      <Route path="/" index element={<Home/>} />
                      <Route element={<ProtectedRoute/>}>
                          <Route path="/admin" element={<AdminPanel/>}></Route>
                          <Route path="/dashboard" element={<Dashboard/>}></Route>
                      </Route>
                      <Route path="/login" element={<Login/>} />
                      <Route path="/*" element={<NotFound/>}/>
                  </Route>
              </Routes>
      </BrowserRouter>
  )
}

export default App
