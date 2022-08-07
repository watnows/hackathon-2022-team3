import './Servise.css'
import {MatterStepOne} from './matterpractice'
export const Service = () => {
  return (
    <div className="flexbox">
      <MatterStepOne></MatterStepOne>
      <section className="side">

      </section>
      <article className="main">
        <h1>サイト名</h1>
        <nav>
          <ul>
            <li><a href="/liquor">酒瓶</a></li>
            <li><a href="/service">空瓶</a></li>
            <li><a href="./users">ユーザ</a></li>
            <li><a href="./reccomend">おすすめ</a></li>
          </ul>
        </nav>
        <p>空瓶のページ</p>

      </article>
      <section className="side">
      </section>
    </div>
  )
}