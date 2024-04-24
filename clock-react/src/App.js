import { useEffect, useState } from 'react'
import style from './style.module.css';

function App() {
  const [clock, setClock] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(new Date());
    }, 1000)

    return ()=>clearInterval(interval);

  }, [clock]);


  return <>

    <div className={style.wrapper}>
      <div className={style.line}></div>
      <div className={style.clock}>
        <h1>{clock.getHours()}:{clock.getMinutes()}:{clock.getSeconds()}</h1>
        <h3>{clock.getDate()}:{clock.getMonth()}:{clock.getFullYear()}</h3>
      </div>
    </div>


  </>


}

export default App;
