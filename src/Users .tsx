import './Users.css'
export const Users = () => {
    return(
        <div className="flexbox">
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
        <p>ユーザのページ</p>

      </article>
      <section className="side">
      </section>
      
    </div>
    )
}
  