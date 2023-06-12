import './App.css';

import postImg_01 from './img/cool-wallpaper-for-men.jpg';

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">MyBlog</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className="post">
        <img src={postImg_01} alt="d"/>
        <h2>This is my first test blog post.</h2>
        <p>
          Lorem ipsum weather boy. It's gonna rain. The leaves will be green.
          The sun will shine. Children will be free of technological delusion.
          Men and women will be free of paranoia. The moon will dance with the
          waters.
        </p>
      </div>
    </main>
  );
}

export default App;
