import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';

const DrawingCanvas = forwardRef(({ onChange, initialData, width = 800, height = 400 }, ref) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#000000';
    setContext(ctx);

    // Clear canvas first
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Load initial data if provided
    if (initialData) {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0);
      };
      img.src = initialData;
    }
  }, [initialData]);

  const startDrawing = (e) => {
    if (!context) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    context.beginPath();
    context.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing || !context) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    context.lineTo(x, y);
    context.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      context.closePath();
      
      // Notify parent of canvas change
      const dataURL = canvasRef.current.toDataURL();
      if (onChange) {
        onChange(dataURL);
      }
    }
  };

  const clear = () => {
    if (context && canvasRef.current) {
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      const dataURL = canvasRef.current.toDataURL();
      if (onChange) {
        onChange(dataURL);
      }
    }
  };

  // Expose methods via ref
  useImperativeHandle(ref, () => ({
    clear,
    getDataURL: () => canvasRef.current?.toDataURL() || ''
  }));

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
      style={{
        border: '1px solid #ddd',
        borderRadius: '4px',
        cursor: 'crosshair',
        touchAction: 'none',
        backgroundColor: '#ffffff'
      }}
    />
  );
});

DrawingCanvas.displayName = 'DrawingCanvas';

export default DrawingCanvas;
