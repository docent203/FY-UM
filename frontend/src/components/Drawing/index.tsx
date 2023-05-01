import { current } from "@reduxjs/toolkit";
import { useEffect, useRef, useState } from "react";
import { white, black } from "../../styles/colors";

import {
  WoodContainer,
  Canvas,
  CanvasContainer,
  CanvasColorsContainer,
  ToolsContainer,
  InvisibleColorPicker,
  CurrentColor,
  ColorsContainer,
  CanvasColors,
  LineWidthStyle,
  BrushIcStyle,
  PainterIcStyle,
  PaletteIcStyle,
  EraserIcStyle,
  ResetIcStyle,
} from "./styles";

interface ImgProps {
  imgFile: File | undefined;
}

const DrawingApp = ({ imgFile }: ImgProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [isPainting, setIsPainting] = useState(false);
  const [isFilling, setIsFilling] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [currentColor, setCurrentColor] = useState(black);

  const CANVAS_WIDTH =
    window.innerWidth >= 768 ? 650 : window.innerWidth > 500 ? 400 : 350;
  const CANVAS_HEIGHT = 380;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = CANVAS_WIDTH;
      canvas.height = CANVAS_HEIGHT;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.lineJoin = "round";
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = currentColor;
        ctx.fillStyle = white;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      if (imgFile) {
        const url = URL.createObjectURL(imgFile);
        const image = new Image();
        image.src = url;
        image.onload = function () {
          ctx?.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        };
      }
      setCtx(ctx);
    }
  }, [ctx, imgFile]);

  const onMoveDraw = (x: number, y: number) => {
    if (!isFilling) {
      if (!isPainting) {
        ctx?.beginPath();
        ctx?.moveTo(x, y);
      } else {
        ctx?.lineTo(x, y);
        ctx?.stroke();
      }
    }
  };

  const onTouchDraw = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    const touchX = e.touches[0].pageX - rect.left;
    const touchY = e.touches[0].pageY - rect.top;
    onMoveDraw(touchX, touchY);
  };

  const onColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const colorValue = e.target.value;
    if (ctx && colorValue) {
      ctx.strokeStyle = colorValue;
      ctx.fillStyle = colorValue;
      setCurrentColor(colorValue);
    }
  };

  const onColorClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement; // as: 타입 단언 - target이 HTMLDivElement임을 명시적으로 지정
    const colorValue = target.dataset.color;
    if (colorValue && ctx) {
      ctx.strokeStyle = colorValue;
      ctx.fillStyle = colorValue;
      setCurrentColor(colorValue);
    }
  };

  const onEraserClick = () => {
    if (ctx) {
      setIsFilling(false);
      ctx.strokeStyle = white;
    }
  };

  const onResetClick = () => {
    if (ctx) {
      setIsFilling(false);
      ctx.fillStyle = white;
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
  };

  const onCanvasClick = () => {
    if (isFilling && ctx) {
      ctx.fillStyle = currentColor;
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
  };

  const onLineWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (ctx) {
      const LineWidthValue = Number(e.target.value);
      setLineWidth(LineWidthValue);
      ctx.lineWidth = LineWidthValue;
    }
  };

  const colors = [
    "#1abc9c",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#34495e",
    "#f1c40f",
    "#e67e22",
    "#e74c3c",
    "#ecf0f1",
    "#95a5a6",
  ];

  return (
    <>
      <WoodContainer>
        <CanvasContainer>
          <CanvasColorsContainer>
            <Canvas
              className="canvas"
              ref={canvasRef}
              onMouseDown={() => setIsPainting(true)}
              onMouseUp={() => setIsPainting(false)}
              onMouseMove={(e) =>
                onMoveDraw(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
              }
              onMouseLeave={() => setIsPainting(false)}
              onTouchStart={(e) => {
                setIsPainting(true);
                onTouchDraw(e);
              }}
              onTouchEnd={() => setIsPainting(false)}
              onTouchMove={(e) => onTouchDraw(e)}
              onClick={onCanvasClick}
            ></Canvas>
            <ColorsContainer>
              {colors.map((color, key) => (
                <CanvasColors
                  data-color={color}
                  key={key}
                  color={color}
                  onClick={(e) => onColorClick(e)}
                />
              ))}
            </ColorsContainer>
          </CanvasColorsContainer>
          <ToolsContainer>
            <CurrentColor color={currentColor} />
            <InvisibleColorPicker
              id="color-picker"
              type="color"
              value={currentColor}
              color={currentColor}
              onChange={(e) => onColorChange(e)}
            />
            <label htmlFor="color-picker">
              <PaletteIcStyle />
            </label>

            <BrushIcStyle onClick={() => setIsFilling(false)} />
            <PainterIcStyle onClick={() => setIsFilling(true)} />
            <EraserIcStyle onClick={onEraserClick} />
            <ResetIcStyle onClick={onResetClick} />
            <LineWidthStyle
              type="range"
              min="1"
              max="10"
              value={lineWidth}
              step="0.5"
              onChange={(e) => onLineWidthChange(e)}
            />
          </ToolsContainer>
        </CanvasContainer>
      </WoodContainer>
    </>
  );
};

export default DrawingApp;
