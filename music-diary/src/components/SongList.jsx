const SongList = (props) =>{
    return(
        <>
        <div className="songlist">
            <h2>Songs</h2>
            <hr />
            {
                props.songs.map(song =>(
                    <div key={song.id}>
                        <p className="name">{song.title}</p>
                        <p>{song.artist}</p>
                        <div className="gen"><p>{song.genre}</p></div>
                        <hr />
                    </div>
                ))
            }
        </div>
        
        </>
    )
}
export default SongList