// 1. Import react
import React, { useEffect, useState } from "react";


// 5 y 2 Exportar y crear el componente función
export const SimpleCounter = () => {
  // 3. Código JS
  // let counter = 4556;
  // 3.1 Defino los states
  const [counter, setCounter] = useState(45678)
  const [isActive, setIsActive] = useState(false)
  const [status, setStatus] = useState({icon: 'fa fa-clock',
                                        title: 'Clock',
                                        className: 'text-center' })


  // 3.2 Defino las funciones
  const handlePrimary = () => {
    setIsActive(!isActive);
    setStatus({icon: "fas fa-stopwatch",
               title: 'Chronometer',
               className: 'text-center text-primary' });
  };


  const handleReset = () => {
    setCounter(0);
    setIsActive(false);
    setStatus({icon: 'fa fa-clock',
               title: 'Clock',
               className: 'text-center' });
  };
    
  
  useEffect(() => {
    if (isActive) { 
      nIntervalId = setInterval(() => {
        setCounter(counter => counter + 1)
      }, 10);
    } 
    return () => clearInterval(nIntervalId)
  }, [isActive, counter]);
  

  let nIntervalId;
  
  // 4. Retornar un solo elemento HTML
  return (
    <div className="container">
      <h1 className={"text-center mt-3"}>{'Simple Counter'}</h1>
      <h2 className={status.className}>{status.title}</h2>
      <div className="big-counter">
        <div><i className={status.icon}></i></div>
        <div>{Math.floor(counter / 100000) % 10}</div>
        <div>{Math.floor(counter / 10000) % 10}</div>
        <div>{Math.floor(counter / 1000) % 10}</div>
        <div>{Math.floor(counter / 100) % 10}</div>
        <div>,</div>
        <div>{Math.floor(counter / 10) % 10}</div>
        <div>{counter % 10}</div>
        <div className="btn-group-vertical btn-group-sm my-5" role="group" aria-label="Vertical button group">
          <button type="button" className="btn btn-outline-success"
            onClick={handlePrimary}>
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button type="button" className="btn btn-outline-danger"
            onClick={handleReset}>
            {'Reset'}
          </button>
        </div>
      </div>
    </div>
  );
}