import axios from 'axios';
import React, { useState } from 'react';

const App = () => {
    const [data, setData] = useState(null);
    const onClick = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos/1").then(response => {
            setData(response.data);
        })
    }
    return (
        <div>
            <div>
                <button onClick={onClick}>불러오기</button>
            </div>
            {data &&}
        </div>
    );
};

export default App;