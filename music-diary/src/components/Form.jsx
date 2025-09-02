import { useState } from "react"
import service from "../service/service"

const Info = (props) =>{
    return(
        <>
        <div className="input">
            <div>{props.label}</div>
            
            <input type={props.type} 
            value={props.val}
            onChange={(e) => props.handleChange(e.target.value)}
            placeholder={props.placeholder}/>

        </div>
        
        </>
    )
}

const Select = (props) =>{
    return(
        <div className="input">
            <div>{props.label}</div>
            
            <select value={props.val} onChange={(e) => props.handleChange(e.target.value)} placeholder={props.placeholder}>
                {
                    props.options.map(op => (
                        <option key={op}>{op}</option>
                    ))
                }
            </select>
        </div>
        
    )
}

const Stars = (props) =>{
    return(
        <>
        <div className="stars">
            <div><label>Rating</label></div>

            <span onClick={() => props.handleClick(1)} className="star">★</span>
            <span onClick={() => props.handleClick(2)} data-value={2} className="star">★</span>
            <span onClick={() => props.handleClick(3)} data-value={3} className="star">★</span>
            <span onClick={() => props.handleClick(4)} data-value={4} className="star">★</span>
            <span onClick={() => props.handleClick(5)} data-value={5} className="star">★</span>
        </div>
        </>
    )
}

const Form = (props) =>{
    const genre = ["Genre","Dancehall", "Reggae", "Afrobeats", "Hip Hop", "R&B", "Pop", "Other"]
    const discovery = ["Discovery","Youtube Recommendation", "Searched for it", "Found in playlist", "Friend Shared"]

    const [name, setName] = useState("")
    const [artist, setArtist] = useState("")
    const [gen, setGenre] = useState("")
    const [dis, setDiscovery] = useState("")
    const [rating, setRating] = useState(3)
    const [notes, setNotes] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        

        const song = {
            title:name,
            artist:artist,
            genre:gen,
            discoveryMethod:dis, 
            rating:rating,
            notes:notes
        }

        
        service.create(song)
        .then(song =>{
            props.handleSong(props.songs.concat(song))
            
        })

        
        setName("")
        setArtist("")
        setGenre("")
        setDiscovery("")
        setRating(3)
        setNotes("")

    }

    const handleStarClick = (data) =>{
        setRating(data)

    }
    
    return(
        
        <>
        <div className="form">
            <h2>Add a new song</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                
                <div className="grid">
                    <Info label = "Song Title" type="text" val={name} handleChange={setName} placeholder="Enter song title"/>
                    <Info label = "Artist" type="text" val={artist} handleChange={setArtist} placeholder="Enter artist name"/>
                    <Select val={gen} handleChange={setGenre} label="Genre" options={genre}/>
                    <Select val ={dis} handleChange={setDiscovery} label="How did you find this?" options={discovery}/>

                </div>
                
                <Stars handleClick={handleStarClick}/>

                <div>
                    <div><label>Notes (Optional)</label></div>
                    
                    <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} placeholder="Text"></textarea>

                </div>
                

                <button type="submit" className="submitBtn">Add Song</button>

            </form>
            
        </div>
        
        </>
    )
}

export default Form