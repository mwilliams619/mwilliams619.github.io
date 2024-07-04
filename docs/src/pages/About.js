import React from 'react';
import './About.css'
import { useBgColor } from '../functions/useBgColor'

function About() {
    useBgColor('rgb(160, 160, 78)');
    return (
        <div className="about-me-container">
          <h2 className="about-me-heading">About Me</h2>
          <div className="about-me-content">
            <p>
              I am a computational biologist and recent graduate of the Master's in Biotechnology Program at Northwestern University, with graduate minors in Entrepreneurship and Synthetic Biology. My interests lie at the intersection of biology and computer science, particularly in the field of machine learning-driven protein engineering.
            </p>
            <p>
              I am passionate about transforming data into actionable insights. During my internships with LanzaTech and Bluestem Biosciences, I developed tools and models to guide downstream experimentation.
            </p>
            <p>
              After years in the wet lab, my time at Tempus inspired me to learn how to code. I saw that the data we generated in the lab was being used to develop AI to connect patients with treatments, and I decided I wanted to be part of using the data, not just generating it. That was in 2020. Over the past four years, I have taught myself to program, worked on front-end development for HealthPhi, a mobile health tech startup, served as a full stack developer for Bluestem Biosciences, a synthetic biology startup in the climate space, and held a data science role developing and deploying mathematical models at LanzaTech. During this time, I also deepened my understanding of bio-processing as well as the business and regulatory aspects of the biotech space by completing my master's degree at Northwestern.
            </p>
            <p>
              My years of bench experience, combined with my software skills and training from Northwestern, provide unique insights into the needs of diverse collaborators, from scientists and commercial professionals to fellow technologists.
            </p>
          </div>
        </div>
      );
    };

export default About;