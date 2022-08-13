// MatterStepOne.js
import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import './matterpractice.css'
//import logo from ".flat_kakubin_700ml_full_2.svg"
import kakubin_700ml from "./flat_kakubin_700ml_empty.png"
import gilbeysvodka_375ml from "./flat_gilbeysvodka_375ml_empty.png"

export const MatterStepOne = () => {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  var bottles = [
    {
      "name": "gilbeysvodka_375ml",
      "image": gilbeysvodka_375ml,
      "width": 130,
      "height": 291,
    },
    {
      "name": "kakubin_700ml",
      "image": kakubin_700ml,
      "width": 113,
      "height": 318,
    }
  ];

  const bottleAmount = 57

  useEffect(() => {
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Bodies = Matter.Bodies;

    let engine = Engine.create({});

    //add
    // <img id="foo" src="https://placehold.jp/300x300.png" width="500" height="500">

    // <script>

    // // img要素を取得
    // let elm = document.getElementById("foo");

    // // 幅を表示
    // console.log(elm.naturalWidth); // 300

    // // 高さを表示
    // console.log(elm.naturalHeight); // 300

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        background: 'rgba(255, 255, 255)',
        wireframes: false
      }
    });

    const floor = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 50, {
      isStatic: true,
      render: {
        fillStyle: 'white'
      }
    });

    const wallleft = Bodies.rectangle(0, window.innerHeight / 2, 50, window.innerHeight, {
      isStatic: true,
      render: {
        fillStyle: 'white'
      }
    });

    const wallright = Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 50, window.innerHeight, {
      isStatic: true,
      render: {
        fillStyle: 'white'
      }
    });

    World.add(engine.world, [floor]);
    World.add(engine.world, [wallleft]);
    World.add(engine.world, [wallright]);

    // var image = new Image();
    //   var width;
    //   var height;
      
    //   image.onload = function(){
    //     width = image.width;
    //     height = image.height;
    //   };
      
    // image.src = './flat_kakubin_700ml_full.png';
    
    var currentBottles = 0;

    setInterval(() => {
      // let img = new Image(100,100)
      // let imgurl = img.toDataURL("./logo.svg")
      
      if (currentBottles < bottleAmount){
        var selectedBottle = bottles[getRandomInt(0, Object.keys(bottles).length)];

        var selectedTexture = selectedBottle["image"]
        var bottleWidth = selectedBottle["width"]
        var bottleHeight = selectedBottle["height"]

        var rectBody = Bodies.rectangle(getRandomInt(window.innerWidth/2 - 200, window.innerWidth/2 + 200), 400,(bottleWidth / 2) - 10, (bottleHeight / 2) - 10, {
          restitution: 0.7,
          render: {
            sprite:{
            texture: selectedTexture,
            xScale: 0.5,
            yScale: 0.5
            }
          }
        });
      World.add(engine.world, [rectBody]);
      currentBottles += 1;
      document.getElementById("animatedBottleCounter").innerText = currentBottles
      }

    }, 1000 / bottleAmount);
    
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