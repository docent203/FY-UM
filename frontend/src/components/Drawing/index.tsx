import { useEffect, useRef, useState } from "react";

import { WoodContainer, CanvasContainer } from "./styles";

const DrawingApp = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [isPainting, setIsPainting] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width =
        window.innerWidth >= 768 ? 768 : window.innerWidth > 500 ? 400 : 350; // 화면이 768px 이상이면 600, 그 외에는 400으로 설정
      canvas.height = 400;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.lineJoin = "round";
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = "#000000";
      }
      setCtx(ctx);
    }
  }, []);

  const onMoveDraw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;
    if (!isPainting) {
      ctx?.beginPath();
      ctx?.moveTo(mouseX, mouseY);
    } else {
      ctx?.lineTo(mouseX, mouseY);
      ctx?.stroke();
    }
  };

  return (
    <>
      <WoodContainer>
        <CanvasContainer>
          <canvas
            className="canvas"
            ref={canvasRef}
            onMouseDown={() => setIsPainting(true)}
            onMouseUp={() => setIsPainting(false)}
            onMouseMove={(e) => onMoveDraw(e)}
            onMouseLeave={() => setIsPainting(false)}
          ></canvas>
        </CanvasContainer>
      </WoodContainer>
    </>
  );
};

export default DrawingApp;
