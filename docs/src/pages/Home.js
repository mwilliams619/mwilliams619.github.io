import React from 'react';
import './Home.css'
import ProteinViewer from '../components/protein.js';
import { useBgColor } from '../functions/useBgColor'

function Home() {
  useBgColor('rgb(36,46,52)');
  return (
    <div className="bio-container">
    
    <h3>
        I aim to drive innovation in <strong>biotech</strong> 🧬 using <strong>computational biology</strong>
    </h3>
    <p>
        As a recent <strong>Northwestern University Biotech MS grad</strong>, I:
    </p>
    <ul className='no-bullet'>
        <li>
            🤖 Deployed <strong>ML-driven</strong> approaches for strain engineering projects
        </li>
        <li>
            💻 Built <strong>bioinformatics</strong> tools to help synbio startups turn ideas into reality.
        </li>
        <li>
            🎓 Studied <strong>biology, machine learning, and entrepreneurship</strong> - because in biotech, you've got to wear many hats!
        </li>
    </ul>

    <p>
        I am passionate about 🧑🏽‍💻 developing software tools to empower scientists and commercial stakeholders to efficiently reach their goals and 📚 continously learning to keep up with the technological innovations occuring around us.
    </p>
    <div>
    {/* <ProteinViewer pdb='6tmf' chain='' seq='' /> */}
    </div>
    </div>
  );
}

export default Home;