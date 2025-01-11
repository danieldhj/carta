import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from "react-router-dom";

function App() {

    useEffect(() => {
        const timer = setTimeout(() => {
            document.getElementById('first-h1').classList.add('hidden');
            document.getElementById('second-h1').classList.remove('hidden');
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

  return (
      <>
          <div className="flex flex-col justify-center items-center bg-pink-400 h-screen w-screen">
              <Link to="/Pagina2" className="corazon"></Link>
              <br/>
              <h1 className="text-4xl font-bold text-white text-center w-4/5" id="first-h1">asi late mi corazon por ti</h1>
<h1 className="text-4xl font-bold text-white text-center hidden w-4/5" id="second-h1">tocalo</h1>

          </div>

      </>
  )
}

export default App
