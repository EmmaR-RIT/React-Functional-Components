const React = require('react');
const { useState, useEffect } = React;
const { createRoot } = require('react-dom/client');


const SongContainer = (props) => {
    const [songs, setSongs] = useState(props.songs);
    const [reload, setReload] = useState(false);

    const loadSongsFromServer = async () => {
        console.log('Loading songs...')
        const data = await fetch('/getSongs').then(d => d.json());
        setSongs(data);
    };

    useEffect(() => { loadSongsFromServer(); }, [reload]);

    if (songs.length === 0) {
        return (
            <>
                <h3>No Songs Yet!</h3>
            </>
        );
    }

    return (
        <>
            <h1>My Favorite Song!</h1>
            <ol>
                {songs.map(song => <li key={song.title}>{song.artist} - <i>{song.title}</i></li>)}
            </ol>
            <button onClick={() => setReload(!reload)}>Reload Songs</button>
        </>
    );
};


const init = () => {
    const root = createRoot(document.getElementById('app'));
    root.render(<SongContainer songs={[]} />);
};


window.onload = init;
