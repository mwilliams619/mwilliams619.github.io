import React from 'react';
import './Home.css'
import { useBgColor } from '../functions/useBgColor'

function Home() {
  useBgColor('rgb(200, 160, 78)');
  return (
    <div className="bio-container">
    
    <p>
        I work at the intersection of <strong>computational biology</strong>, <strong>machine learning</strong>, and <strong>biotech innovation</strong> 🧬
    </p>
    <p>
        I'm a recent <strong>Northwestern University Biotech MS grad</strong>, and I:
    </p>
    <ul className='no-bullet'>
        <li>
            🤖 Deploy ML-driven approaches for strain engineering - think teaching computers to speak the language of life.
        </li>
        <li>
            💻 Build bioinformatics tools that help synbio startups turn wild ideas into reality.
        </li>
        <li>
            🎓 Blend biology, computer science, and entrepreneurship - because in biotech, you've got to wear many hats!
        </li>
    </ul>
    </div>
  );
}

export default Home;