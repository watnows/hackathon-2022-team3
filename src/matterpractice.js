// MatterStepOne.js
import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import './matterpractice.css'
import logo from "./flat_kakubin_700ml_empty.png"

export const MatterStepOne = () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Bodies = Matter.Bodies;

    let engine = Engine.create({});

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        background: 'rgba(255, 0, 0, 0.5)',
        wireframes: false
      }
    });

    const floor = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 50, {
      isStatic: true,
      render: {
        fillStyle: 'skyblue'
      }
    });

    const wallleft = Bodies.rectangle(0, window.innerHeight / 2, 50, window.innerHeight, {
      isStatic: true,
      render: {
        fillStyle: 'skyblue'

      }
    });

    const wallright = Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 50, window.innerHeight, {
      isStatic: true,
      render: {
        fillStyle: 'skyblue'
      }
    });

    // const ball = Bodies.rectangle(200, 10, 20, 30,{
    //   restitution: 0.9,
    //   render: {
    //     fillStyle: 'yellow'
    //   }
    // });

    // const ball2 = Bodies.circle(200, 0, 10, {
    //   restitution: 0.9,
    //   render: {
    //     fillStyle: 'red'
    //   }
    // });

    // const ball3 = Bodies.circle(200, 0, 10, {
    //   restitution: 0.9,
    //   render: {
    //     fillStyle: 'red'
    //   }
    // });

    //World.add(engine.world, [floor, ball, ball2]);

    World.add(engine.world, [floor]);
    World.add(engine.world, [wallleft]);
    World.add(engine.world, [wallright]);

    // setInterval(() => {
    //   var ball = Bodies.circle(getRandomInt(100, 200), 0, 20, {
    //     restitution: 0.9,
    //     render: {
    //       fillStyle: 'yellow'
    //     }
    //   });
    //   World.add(engine.world, [ball]);      
    // }, 1000);

    setInterval(() => {
      // let img = new Image(100,100)
      // let imgurl = img.toDataURL("./logo.svg")
      var ball = Bodies.rectangle(getRandomInt(100, 200), 0, 30, 90, {
        restitution: 0.9,
        render: {
            //  fillStyle: 'yellow'
          sprite:{
          texture:logo
          //texture:flat_kakubin_700ml_full
          }
        }
      });

      World.add(engine.world, [ball]);
    }, 1000);



    Engine.run(engine);
    Render.run(render);
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        // width: window.innerWidth,
        // height: 300
      }}
    >
      <canvas id='emptybottols' ref={canvasRef} />
    </div>
  );
};