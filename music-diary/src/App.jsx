import Form from "./components/Form"
import Header from "./components/Header"
import Display from "./components/Display"  
import SongList from "./components/SongList"
import service from "./service/service"
import GenrePieChart from "./components/GenrePieChart"
import { useState, useEffect } from "react"

const App = () =>{
  const [songs, setSongs] = useState([])
  
  useEffect(() =>{
    service.getAll().then(response => setSongs(response))     
  },[])


  return(
    <>
    <Header/>
    <Display songs={songs}/>
    <Form songs={songs} handleSong={setSongs}/>
    <GenrePieChart songs={songs}/>
    <SongList songs={songs}/>
    </>
    
  )
}
export default App
