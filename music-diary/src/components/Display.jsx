
const Display = (props) =>{
    let count = 0

    count = props.songs.length

   const averageRating = props.songs.length > 0
   ? (props.songs.reduce((sum, song) => sum + song.rating,0)/props.songs.length).toFixed(1)
   :0

    const artistCount = new Set(props.songs.map(song => song.artist)).size
    const genreCount = new Set(props.songs.map(song => song.genre)).size



    return(
        <>
        <div className="info">
            <div className="songs">
                <div>{count}</div>
                <p>Songs Logged</p>
            </div>
            <div className="songs">
                <div>{artistCount}</div>
                <p>Artists Discovered</p>
            </div>
            <div className="songs">
                <div>{genreCount}</div>
                <p>Genres Explored</p>
            </div>
            <div className="songs">
                <div>{averageRating}</div>
                <p>Average Rating</p>
            </div>

        </div>
        
        </>
    )
}

export default Display