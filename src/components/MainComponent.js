import React from 'react';
import { links } from '../assets/links.js';

const MainComponent = () => {
    return (
        <>
            <main className='main-component'>
                <div>
                {links.map((link, index) => (
                    <div className={`link link-${index} link-aaa`} style={{top:`${index*23}px`}}>
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