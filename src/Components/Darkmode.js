import React, { useState, useEffect } from 'react';

const Darkmode =()=>{
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.style={theme};
    }, [theme]);
    return (
        <div>
            <button onClick={toggleTheme}> Toggle Theme</button>
        </div>
    );
}
export default Darkmode;