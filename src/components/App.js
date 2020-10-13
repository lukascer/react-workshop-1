import { useState, useEffect } from 'react';

const App = () => {
    const [posts, setPosts] = useState([]);
    // TODO: set error

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const result = await response.json();
                setPosts(result);
            } catch (e) {
                setPosts([]);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {posts.map(({ id, title, body }) => (
                <div key={id}>
                    <h2>{title}</h2>
                    <p>{body}</p>
                </div>
            ))}
        </div>
    );
};

export default App;
