const SongList = (props) =>{
    return(
        <>
        <div className="songlist">
            {
                props.songs.map(song =>(
                    <div key={song.id}>
                        <p>{song.title}</p>
                        <p>{song.artist}</p>
                        <p>{song.genre}</p>
                        <hr />
                    </div>
                ))
            }
        </div>
        
        </>
    )
}
export default SongList