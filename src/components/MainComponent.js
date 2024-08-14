import React from 'react';
import { links } from '../assets/links.js';

const MainComponent = () => {
    return (
        <>
            <main className='main-component'>
                <div style={{paddingLeft:'1000px'}}>
                {links.map((link, index) => (
                    <div className={`link link-${index}`}>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            {link}
                        </a>
                    </div>
                ))}
                </div>
            </main>
        </>
    );
}

export default MainComponent;