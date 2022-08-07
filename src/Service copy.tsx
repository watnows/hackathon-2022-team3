import './Reccomend.css'
export const Reccomend = () => {
    return(
        <div className="flexbox">
      <section className="side">

      </section>
      <article className="main">
        <h1>サイト名</h1>
        <nav>
          <ul>
            <li><a href="/liqur">酒瓶</a></li>
            <li><a href="/empty_bottle">空瓶</a></li>
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