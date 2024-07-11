import React from 'react';
import './Home.css'
import { useBgColor } from '../functions/useBgColor'

function Home() {
  useBgColor('rgb(36,46,52)');
  return (
    <div className="bio-container">
    
    <p>
        I aim to drive innovation in <strong>biotech</strong> 🧬 using <strong>computational biology</strong>
    </p>
    <p>
        I'm a recent <strong>Northwestern University Biotech MS grad</strong>, where I:
    </p>
    <ul className='no-bullet'>
        <li>
            🤖 Deployed ML-driven approaches for strain engineering projects
        </li>
        <li>
            💻 Built bioinformatics tools to help synbio startups turn ideas into reality.
        </li>
        <li>
            🎓 Studied biology, computer science, and entrepreneurship - because in biotech, you've got to wear many hats!
        </li>
    </ul>

    <p>
        Passionate about 🧑🏽‍💻 developing software tools to empower scientists and commercial stakeholders to efficiently reach their goals and 📚 continously learning to keep up with the technological innovations occuring around us.
    </p>
    </div>
  );
}

export default Home;