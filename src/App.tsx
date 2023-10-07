import './App.css'
import { useEffect, useRef, useState } from 'react'
import { Menu } from './pages/Menu'
import { Preloader } from './pages/Preloader'
import { gameManager } from './core/GameManager'
import { unscheduleDelay } from './pages/Scheduler'
import { Canvas } from './pages/Canvas'

export function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    gameManager.on("preloaded", () => setLoading(false));
    gameManager.on("restart", () => setLoading(true));
    return () => {
      gameManager.reset();
      unscheduleDelay();
    }
  }, [gameManager.restartCount])

  return (
    <>
      <Canvas />
      {loading && <Preloader />}
      {!loading && <Menu />}
    </>
  )
}
