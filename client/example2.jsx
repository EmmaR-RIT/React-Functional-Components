const React = require('react');
const { createRoot } = require('react-dom/client');



const HelloUser = (props) => {
    const [username, setUsername] = React.useState(props.username);

    return (
        <>
            <p>Hello {username}</p>
            <label>Change Name: </label>
            <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
        </>
    );
}


const init = () => {
    const root = createRoot(document.getElementById('app'));
    root.render(
        <HelloUser username="Emma" />
    );
};

window.onload = init;