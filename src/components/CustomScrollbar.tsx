'use client'
import React, { useEffect } from 'react';

const CustomScrollbar: React.FC = () => {
  useEffect(() => {
    // Create a style element
    const style = document.createElement('style');
    
    // Define the CSS for the custom scrollbar
    const css = `
      /* Webkit browsers (Chrome, Safari, etc.) */
      ::-webkit-scrollbar {
        width: 10px; /* Adjusted width */
      }

      ::-webkit-scrollbar-track {
        background: #1a1a1a; /* Dark track color */
        border-radius: 8px;
      }

      ::-webkit-scrollbar-thumb {
        background: #f0f0f0; /* Light thumb color to contrast against dark track */
        border-radius: 8px;
        border: 3px solid #1a1a1a; /* Border to match track color */
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #888; /* Darker hover effect */
      }

      /* Firefox */
      * {
        scrollbar-width: thin;
        scrollbar-color: #f0f0f0 #1a1a1a; /* Light thumb, dark track */
      }

      /* Edge & Internet Explorer */
      body {
        -ms-overflow-style: none;
      }

      /* Custom scrollable content area */
      .scrollable-content {
        overflow-y: scroll;
        scrollbar-width: thin;
        scrollbar-color: #f0f0f0 #1a1a1a;
      }

      .scrollable-content::-webkit-scrollbar {
        width: 10px;
      }

      .scrollable-content::-webkit-scrollbar-track {
        background: #1a1a1a;
      }

      .scrollable-content::-webkit-scrollbar-thumb {
        background-color: #f0f0f0;
        border-radius: 8px;
        border: 3px solid #1a1a1a;
      }

      .scrollable-content::-webkit-scrollbar-thumb:hover {
        background-color: #888;
      }
    `;

    // Set the CSS text
    style.textContent = css;

    // Append the style element to the document head
    document.head.appendChild(style);

    // Clean up function to remove the style when the component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return null; // This component doesn't render anything visible
};

export default CustomScrollbar;
