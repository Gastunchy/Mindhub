
import './App.css'
import Contact from './pages/Contact'
import Error from "./pages/Error"
import Home from './pages/Home'
import Stats from './pages/Stats'
import Details from './pages/Details'
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import EventosAction from './store/actions/eventosAction'
import Login from './Components/login/Login'
import Register from './pages/Register'



function App() {



  const dispatch = useDispatch();





  useEffect(() => {
    dispatch(EventosAction.get_eventos())




  }, []);

  return (

    <Routers>
      <Routes>
        <Route exact path="/" element={<Home title="All Events" />} />
        <Route exact path="/UpComing" element={<Home title="Futuro" />} />
        <Route exact path="/Past" element={<Home title="Pasado" />} />
        <Route path="/Stats" element={<Stats title="Stats" />} />
        <Route path="/Contact" element={<Contact title="Contact" />} />
        <Route path="/Details/:id" element={<Details title="Details" />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/*" element={<Error title="Error" />} />
      </Routes>
    </Routers>




  )
}

export default App