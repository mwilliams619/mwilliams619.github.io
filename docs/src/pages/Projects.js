import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './Projects.css';
import { useBgColor } from '../functions/useBgColor'

function Projects() {
    const svgRef = useRef();
    useBgColor('rgb(36, 46, 52)');
  
    useEffect(() => {
      const width = 400;
      const height = 200;
  
      // Sample data (replace with your actual data)
      const nodes = [
        { id: "Please Please Please", group: 1 },
        { id: "BIRDS OF A FEATHER", group: 1 },
        { id: "Not Like Us", group: 2 },
        { id: "MILLION DOLLAR BABY", group: 2 },
        { id: "Espresso", group: 1 },
        { id: "we can't be friends (wait for your love)", group: 1 },
        { id: "Tough", group: 2 },
        { id: "Houdini", group: 2 },
        { id: "Nasty", group: 2 },
        { id: "HOT TO GO!", group: 1 },
      ];
  
      const links = [
        { source: "Please Please Please", target: "BIRDS OF A FEATHER" },
        { source: "Not Like Us", target: "Houdini" },
        { source: "Espresso", target: "BIRDS OF A FEATHER" },
        { source: "Espresso", target: "HOT TO GO!" },
        { source: "Please Please Please", target: "Espresso" },
        { source: "Tough", target: "Nasty" },
        { source: "MILLION DOLLAR BABY", target: "Not Like Us" },
        { source: "HOT TO GO!", target: "BIRDS OF A FEATHER" },
        { source: "we can't be friends (wait for your love)", target: "BIRDS OF A FEATHER" },
        { source: "Not Like Us", target: "Houdini" },
        { source: "Please Please Please", target: "we can't be friends (wait for your love)" },
        { source: "Espresso", target: "BIRDS OF A FEATHER" },
        { source: "Please Please Please", target: "Espresso" },
        { source: "Nasty", target: "Not Like Us" },
        { source: "Tough", target: "BIRDS OF A FEATHER" },
      ];
  
      const svg = d3.select(svgRef.current)
        .attr("width", width)
        .attr("height", height);
  
      const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id))
        .force("charge", d3.forceManyBody().strength(-50))
        .force("center", d3.forceCenter(width / 2, height / 2));
  
      const link = svg.append("g")
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6);
  
      const node = svg.append("g")
        .selectAll("circle")
        .data(nodes)
        .join("circle")
        .attr("r", 5)
        .attr("fill", d => d3.schemeCategory10[d.group])
        .call(drag(simulation));
      
      node.append("title")
        .text(d => d.id);
  
      simulation.on("tick", () => {
        link
          .attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);
  
        node
          .attr("cx", d => d.x)
          .attr("cy", d => d.y);
      });
  
      function drag(simulation) {
        function dragstarted(event) {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          event.subject.fx = event.subject.x;
          event.subject.fy = event.subject.y;
        }
        
        function dragged(event) {
          event.subject.fx = event.x;
          event.subject.fy = event.y;
        }
        
        function dragended(event) {
          if (!event.active) simulation.alphaTarget(0);
          event.subject.fx = null;
          event.subject.fy = null;
        }
        
        return d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended);
      }
  
    }, []);
  
    return (
      <div className='project-body'>
      <div className='cd20-binders'>
      <h2><a href='https://github.com/ccalia/Bits_to_Binders_2024' target="_blank" rel="noopener noreferrer">Designing De Novo Protein Binders to Human CD20</a></h2>
      <h3>Project Overview</h3>
      <p>In this project I worked with a team to design CAR T-cell protein binders to human CD20. This approach holds promise for medical applications such as therapies for B-cell malignancies or autoimmune diseases. CD20 presents a challenging target for de novo binder design due to its extracellular loops providing relatively small surfaces for binding and containing many hydrophilic residues. Additionally, the exposed regions may have some degree of flexibility.</p>
    
      <h3>Technical Implementation</h3>
      <p>We constructed a multi-tiered approach to maximize the success rate of CD20 binders generated with state-of-the-art deep learning tools. Using RFdiffusion's motif scaffolding functionality, we created a minimal target structure and generated over 25,000 80-residue binder backbones. We filtered these backbones using Biopython to ensure contact with specific residues and avoid low-quality designs. The filtered backbones were then used with the ColabDesign framework to generate sequences, which were screened with AlphaFold2. We prioritized further exploration of promising candidates and compiled 1,323 binder sequences, ultimately submitting the highest ranking 500 sequences.</p>
      </div>
      <div className="song-visualizer">
        <h2><a href='https://github.com/mwilliams619/Anther/' target="_blank" rel="noopener noreferrer">Anther</a>: Song Similarity Visualization</h2>
        <div className="visualizer-container">
          <svg ref={svgRef}></svg>
        </div>
        <h3>Project Overview</h3>
        <p>The Anther project was initiated to assist artists in evaluating the relationship between their songs and other content available on streaming platforms. The motivating question was whether there was a method to easily determine the similarity between songs. The ultimate goal was to develop a service that enables artists to efficiently assess the compatibility of their songs with playlists and subsequently apply for playlist placements.</p>
        
        <h4>Technical Stack</h4>
        <h5>The project utilized:</h5>
        <ul>
            <li><strong>Django</strong> for the web framework</li>
            <li><strong>jQuery, HTML, and CSS</strong> for the frontend</li>
            <li><strong>Python</strong> for the backend</li>
            <li><strong>PostgreSQL</strong> for the database</li>
        </ul>
        
        <h4>Key Components</h4>
        <h5>The project involved the development of several key components:</h5>
        <ol>
            <li>Implementation of search functionality to retrieve songs and playlists for the database.</li>
            <li>Processing songs to extract relevant data for analysis.</li>
            <li>Utilizing a comparison algorithm to cluster songs based on similarity.</li>
            <li>Displaying the song cluster with a <strong>D3</strong> dashboard.</li>
        </ol>
      </div>
        <div className='rag-llm'>
        <h2> <a href='https://github.com/mwilliams619/PDF-query' target="_blank" rel="noopener noreferrer">Retrieval-Augmented Generation Agent</a></h2>
        <h3>Project Overview</h3>
    <p>I developed this agent with the objective of enhancing information sharing between scientific and commercial teams. The initial use case focused on the ability to swiftly summarize and extract information from academic literature that scientists were sharing. Additionally, it was trained with writing samples from the company, significantly boosting the efficiency of drafting proposals and copy.</p>
    
    <h3>Technical Implementation</h3>
    <p>In this project, I created a <strong>Jupyter notebook</strong> designed to incorporate information from various documents into the AI's responses. This notebook processes documents from a specified folder into chunks for rapid retrieval. Upon querying the agent, it generates multiple questions related to your query and extracts pertinent information from the processed PDFs. Ultimately, the Agent produces a report that answers your query using the processed data.</p>
        </div>
        </div>
    );
  }
  
  

export default Projects;