import './Canvas.less';
import { useEffect, useRef, useState } from "react";
import { Game } from "../core/Game";
import { gameManager } from '../core/GameManager';

let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;

export function Canvas({ ...prop }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const game = new Game(canvasRef.current!);
    return () => game.destroy();
  }, [gameManager.restartCount])

  return (
    <aside className="webgl-wrapper">
      <canvas onClick={() => gameManager.emit("canvas-click")} ref={canvasRef} className="webgl-canvas" width={"10px"} style={{ width: "10px" }} {...prop}>No Canvas!</canvas>
    </aside>
  )
}