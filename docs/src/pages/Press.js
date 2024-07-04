import React from 'react';
import './Press.css';
import { useBgColor } from '../functions/useBgColor'

const Press = () => {
    useBgColor('rgb(120, 160, 78)')
  return (
    <div className="press">
        <iframe 
        src="https://open.spotify.com/embed/episode/3vOq1aFxku2uhAtePVSQH4?utm_source=generator" 
        width="50%" 
        height="232" 
        frameBorder="0" 
        allowtransparency="true" 
        allow="encrypted-media"
        title="Spotify Podcast Episode"
      ></iframe>
      <div className='symposium'>
        <a href='https://www.mccormick.northwestern.edu/biotechnology/inside-our-program/stories/2024/showing-research-impact.html'>Symposium Poster Award</a>
      </div>
      <div className='lt-tour'>
        <a href='https://www.mccormick.northwestern.edu/biotechnology/inside-our-program/stories/2023/mbp-students-visit-lanzatech.html'>Lanzatech Tour Story</a>
      </div>
    </div>
  );
};

export default Press;