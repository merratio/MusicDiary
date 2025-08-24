const Info = (props) =>{
    return(
        <>
        <div className="input">
            {props.label}
            <input type={props.type} />

        </div>
        
        </>
    )
}

const Select = (props) =>{
    return(
        <div className="input">
            {props.label}
            <select>
                {
                    props.options.map(op => (
                        <option>{op}</option>
                    ))
                }
            </select>
        </div>
        
    )
}

const Form = () =>{
    const genre = ["dancehall", "reggae", "afrobeats", "hip hop"]
    return(
        
        <>
        <div className="form">
            <h2>Add a new song</h2>
            <hr />
            <form>
                
                <div className="grid">
                    <Info label = "Artist" type="text"/>
                    <Info label = "Artist" type="text"/>
                    <Select label="Genre" options={genre}/>
                    <Select label="Genre" options={genre}/>

                </div>
                
                <Info label = "Artist"/>

                <label>Info</label>
                <textarea placeholder="Text"></textarea>

                <button type="submit" className="submitBtn">Add Song</button>

            </form>
            
        </div>
        
        </>
    )
}

export default Form