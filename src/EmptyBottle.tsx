import './EmptyBottle.css'
import { MatterStepOne } from './matterpractice'
import { Header } from './ Header'



export const EmptyBottle = () => {
  return (
    <div className="flexbox">
      <MatterStepOne></MatterStepOne>
      <section className="side" style={{ opacity: 0 }}>
      </section>
      <article className="main">
        <Header></Header>
        <div className="bottleCounter">
          <span style={{ fontSize: 60 }}>You drank...</span>
          <br />
          <span style={{ fontSize: 240 }} id="animatedBottleCounter">0</span>
          <br />
          <span style={{ fontSize: 60 }}> bottles</span>
        </div>

      </article>
      <section className="side" style={{ opacity: 0 }}>
      </section>
    </div>
  )
}