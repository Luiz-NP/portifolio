import {useState} from "react";
import { createContext } from "react";

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [sound, setSound] = useState(false);

  return (
    <AudioContext.Provider value={{ sound, setSound }}>
      {children}
    </AudioContext.Provider>
  );
}; 
