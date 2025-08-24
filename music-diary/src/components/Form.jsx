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

const Form = () =>{
    const genre = ["Dancehall", "Reggae", "Afrobeats", "Hip Hop", "R&B", "Pop", "Other"]
    const discovery = ["Youtube Recommendation", "Searched for it", "Found in playlist", "Friend Shared"]

    const [name, setName] = useState("")
    const [artist, setArtist] = useState("")
    const [gen, setGenre] = useState("")
    const [dis, setDiscovery] = useState("")
    const [rating, setRating] = useState(0)

    const handleSubmit = (e) =>{
        e.preventDefault()
        

        const song = {
            title:name,
            artist:artist,
            genre:gen,
            discovery:dis, 
            rating:rating
        }

        
        console.log(service.create(song))
        console.log(name)
        console.log(gen)

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
                    <Select val={gen} handleChange={setGenre} label="Genre" options={genre} placeholder=""/>
                    <Select label="How did you find this?" options={discovery} placeholder=""/>

                </div>
                
                <Stars handleClick={handleStarClick}/>

                <div>
                    <div><label>Notes (Optional)</label></div>
                    
                    <textarea rows={3} placeholder="Text"></textarea>

                </div>
                

                <button type="submit" className="submitBtn">Add Song</button>

            </form>
            
        </div>
        
        </>
    )
}

export default Form