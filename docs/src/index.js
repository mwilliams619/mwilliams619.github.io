import React from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './Navbar';

const container = document.getElementById('navbar');
const root = createRoot(container);
root.render(<Navbar />);