import './EmptyBottle.css'
import {MatterStepOne} from './matterpractice'
import { Header } from './ Header'
export const EmptyBottle = () => {
  return (
    <div className="flexbox">
      <MatterStepOne></MatterStepOne>
      <section className="side">

      </section>
      <article className="main">
        <Header></Header>
        <p>空瓶のページ</p>

      </article>
      <section className="side">
      </section>
    </div>
  )
}