
import { useRef } from 'react'
import { useDraw } from '../../hooks/useDraw'
type Draw = {
  ctx: CanvasRenderingContext2D
  currentPoint: Point
  prevPoint: Point | null
}

type Point = { x: number; y: number }
function SecondCanvas({currentPoint,prevPoint,color}:any) {
  const canvasRef = useRef(null);
  // @ts-ignore
  const ctx = canvasRef.current?.getContext('2d');

  drawLine({ ctx, currentPoint, prevPoint })
  function drawLine({ prevPoint, currentPoint, ctx }: Draw) {
    if(!prevPoint || !currentPoint) return
    const { x: currX, y: currY } = currentPoint
    // setPrevPoint(prevPoint);
    // setCurrentPoint(currentPoint);
    console.log(prevPoint);
    console.log(currentPoint);
    
    
    const lineColor = color
    const lineWidth = 5

    let startPoint = prevPoint ?? currentPoint
    ctx.beginPath()
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = lineColor
    ctx.moveTo(startPoint.x, startPoint.y)

    ctx.lineTo(currX, currY)
    ctx.stroke()

    ctx.fillStyle = lineColor
    ctx.beginPath()
    ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI)
    ctx.fill()
  }


  // const clear = () => {
  //   const canvas = canvasRef.current
  //   if (!canvas) return
  //   // @ts-ignore
  //   const ctx = canvas.getContext('2d')
  //   if (!ctx) return
  //   // @ts-
  //   ctx.clearRect(0, 0, canvas.width, canvas.height)
  // }
  return (
    <div>
      <canvas
        ref={canvasRef}
        width={750}
        height={750}
        className='border bg-gray-500 border-black rounded-md'
      />
    </div>
  )
}

export default SecondCanvas