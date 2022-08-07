import "./Header.css"

export const Header = () => {
  return (
    <div className="header">
      <h1>サイト名</h1>
      <div>
      <nav>
        <ul>
          <li><a href="/liquor">酒瓶</a></li>
          <li><a href="/empty_bottle">空瓶</a></li>
          <li><a href="./users">ユーザ</a></li>
          <li><a href="./reccomend">おすすめ</a></li>
        </ul>
      </nav>
      </div>
    </div>
  )
}