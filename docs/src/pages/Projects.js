import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './Projects.css';
import { useBgColor } from '../functions/useBgColor'

function Projects() {
    const svgRef = useRef();
    useBgColor('rgb(40, 40, 160)');
  
    useEffect(() => {
      const width = 400;
      const height = 200;
  
      // Sample data (replace with your actual data)
      const nodes = [
        { id: "Song 1", group: 1 },
        { id: "Song 2", group: 1 },
        { id: "Song 3", group: 2 },
        { id: "Song 4", group: 2 },
        { id: "Song 5", group: 3 },
      ];
  
      const links = [
        { source: "Song 1", target: "Song 2" },
        { source: "Song 2", target: "Song 3" },
        { source: "Song 3", target: "Song 4" },
        { source: "Song 4", target: "Song 5" },
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
      <div className="song-visualizer">
        <h2><a href='https://github.com/mwilliams619/Anther/'>Anther</a>: Song Similarity Visualization</h2>
        <div className="visualizer-container">
          <svg ref={svgRef}></svg>
        </div>
        <div className='rag-llm'>
        <h2> Retrieval-Augmented Generation Agent</h2>
        </div>
      
      </div>
    );
  }
  
  

export default Projects;