import './index.css';
import React, { useState } from 'react';

function App() {
    const [markdown, setMarkdown] = useState('sup');
    return (
        <div className='app'>
            <div>Markdown Area</div>
            <textarea />
        </div>
    );
}

export default App;
