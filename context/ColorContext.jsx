import React, { createContext, useState } from 'react';

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const colors = [
    
    {
      title:'SOS',
      color: '#ff0000'
    },    
    {
      title:'Today',
      color: '#369090'
    },     
    {
      title:'Later',          
      color: '#a843ff'
    },     
  
 
  ];

  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorPress = (color) => {
    setSelectedColor(color);
  };

  const value = {
    colors,
    selectedColor,
    handleColorPress,
  };

  return (
    <ColorContext.Provider value={value}>
      {children}
    </ColorContext.Provider>
  );
};
