export default function Layout({ children }) {
  return (
    <div>
      <header className="header">
        <h1>CoList</h1>
      </header>

      <ul>
        <li>nom</li>
        <li>list</li>
        <li>nom</li>
        <li>list</li>
      </ul>

      <footer className="footer"> Footer </footer>
    </div>
  );
}
