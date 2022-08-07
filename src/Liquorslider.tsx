import { Slider } from '@mui/material';
import './Liquorslider.css'
import React from 'react';
import { useState, useEffect } from 'react';

type osake = {
  progress: number, // 残ってるお酒の割合 0-1
  waterColor: string, // "#3B9AE1" みたいな感じ 塗りつぶしの色を指定
  netWeight: number, // 500ml なら500
}

export const Liquorslider = () => {


  const [png, setPng] = useState<string | null>(null)


  const setdata: osake = {
    progress: 1,
    waterColor: "#3B9AE1",
    netWeight: 500
  }

  const [osakenum, setosakenum] = useState<osake>(setdata)
  const [height, setHeight] = React.useState<number | string | Array<number | string>>(
    200,
  );
  const [sliderheight, setsliderHeight] = React.useState<number | string | Array<number | string>>(
    100,
  );

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (typeof (newValue) == "number") {
      setsliderHeight(newValue)
      setHeight(newValue * 2 + 1);
    }
  }

  useEffect(() => {
    const width = 100
    const canvasElem = document.createElement('canvas')
    canvasElem.width = width
    if (typeof (height) == "number") {
      canvasElem.height = 200
    }


    const ctx = canvasElem && canvasElem.getContext('2d')
    if (!canvasElem || !ctx) return

    // draw

    if (typeof (height) == "number") {

      ctx.clearRect(0, 200 - height, width, height)
      ctx.fillStyle = osakenum.waterColor
      ctx.fillRect(0, 200 - height, width, height)

      ctx.font = '30px Hiragino Maru Gothic Pro'
      ctx.fillStyle = osakenum.waterColor
      // ctx.fillText('Hello ハロー', width / 6, height)
    }

    setPng(canvasElem.toDataURL())
  }, [height])

  return (
    <div className="flexbox">
      <section className="side">

      </section>
      <article className="main">
        <h2>酒スライダー</h2>
        <div className='flexbox'>
          <div className='slider flex_test-item'>

            <Slider
              sx={{
                '& input[type="range"]': {
                  WebkitAppearance: 'slider-vertical',
                },
              }}
              orientation="vertical"
              defaultValue={100}
              aria-label="Temperature"
              valueLabelDisplay="auto"
              value={typeof sliderheight === 'number' ? sliderheight : 0}
              onChange={handleSliderChange}
            // onKeyDown={preventHorizontalKeyboardNavigation}
            />
          </div>
          <div className='slider flex_test-item bin'>
            {png && (
              <div className="comp" style={{ display: 'flex' }}>
                <img alt="icon" src={png} />
              </div>
            )}
            <p>{sliderheight}</p>
          </div>
        </div>
      </article>
      <section className="side">
      </section>


    </div>
  )
}