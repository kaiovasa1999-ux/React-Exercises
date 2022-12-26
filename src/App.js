import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <body>
        <div id="box">
          <section id="welcome-world">
            <div class="welcome-message">
              <h2>ALL new games are</h2>
              <h3>Only in GamesPlay</h3>
            </div>
            <img src="/images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
              <h1>Latest Games</h1>
              <div class="game">
                <div class="image-wrap">
                  <img src="/images/CoverFire.png" />
                </div>
                <h3>Cover Fire</h3>
                <div class="rating">
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                </div>
                <div class="data-buttons">
                  <a href="#" class="btn details-btn">
                    Details
                  </a>
                </div>
              </div>
              <div class="game">
                <div class="image-wrap">
                  <img src="/images/ZombieLang.png" />
                </div>
                <h3>Zombie Lang</h3>
                <div class="rating">
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                </div>
                <div class="data-buttons">
                  <a href="#" class="btn details-btn">
                    Details
                  </a>
                </div>
              </div>
              <div class="game">
                <div class="image-wrap">
                  <img src="/images/MineCraft.png" />
                </div>
                <h3>MineCraft</h3>
                <div class="rating">
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                  <span>☆</span>
                </div>
                <div class="data-buttons">
                  <a href="#" class="btn details-btn">
                    Details
                  </a>
                </div>
              </div>
              <p class="no-articles">No games yet</p>
            </div>
          </section>
          <section id="login-page" class="auth">
            <form id="login">
              <div class="container">
                <div class="brand-logo"></div>
                <h1>Login</h1>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Sokka@gmail.com"
                />
                <label htmlFor="login-pass">Password:</label>
                <input type="password" id="login-password" name="password" />
                <input type="submit" class="btn submit" value="Login" />
                <p class="field">
                  <span>
                    If you don't have profile click <a href="#">here</a>
                  </span>
                </p>
              </div>
            </form>
          </section>
          <section id="register-page" class="content auth">
            <form id="register">
              <div class="container">
                <div class="brand-logo"></div>
                <h1>Register</h1>

                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="maria@email.com"
                />

                <label htmlFor="pass">Password:</label>
                <input type="password" name="password" id="register-password" />

                <label htmlFor="con-pass">Confirm Password:</label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                />

                <input class="btn submit" type="submit" value="Register" />

                <p class="field">
                  <span>
                    If you already have profile click <a href="#">here</a>
                  </span>
                </p>
              </div>
            </form>
          </section>
          <section id="create-page" class="auth">
            <form id="create">
              <div class="container">
                <h1>Create Game</h1>
                <label htmlFor="leg-title">Legendary title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter game title..."
                />

                <label htmlFor="category">Category:</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Enter game category..."
                />

                <label htmlFor="levels">MaxLevel:</label>
                <input
                  type="number"
                  id="maxLevel"
                  name="maxLevel"
                  min="1"
                  placeholder="1"
                />

                <label htmlFor="game-img">Image:</label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="Upload a photo..."
                />

                <label htmlFor="summary">Summary:</label>
                <textarea name="summary" id="summary"></textarea>
                <input class="btn submit" type="submit" value="Create Game" />
              </div>
            </form>
          </section>
          <section id="edit-page" class="auth">
            <form id="edit">
              <div class="container">
                <h1>Edit Game</h1>
                <label htmlFor="leg-title">Legendary title:</label>
                <input type="text" id="title" name="title" />

                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" />

                <label htmlFor="levels">MaxLevel:</label>
                <input type="number" id="maxLevel" name="maxLevel" min="1" />

                <label htmlFor="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" />

                <label htmlFor="summary">Summary:</label>
                <textarea name="summary" id="summary"></textarea>
                <input class="btn submit" type="submit" value="Edit Game" />
              </div>
            </form>
          </section>
          <section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">
              <div class="game-header">
                <img class="game-img" src="images/MineCraft.png" />
                <h1>Bright</h1>
                <span class="levels">MaxLevel: 4</span>
                <p class="type">Action, Crime, Fantasy</p>
              </div>

              <p class="text">
                Set in a world where fantasy creatures live side by side with
                humans. A human cop is forced to work with an Orc to find a
                weapon everyone is prepared to kill for. Set in a world where
                fantasy creatures live side by side with humans. A human cop is
                forced to work with an Orc to find a weapon everyone is prepared
                to kill for.
              </p>
              <div class="details-comments">
                <h2>Comments:</h2>
                <ul>
                  <li class="comment">
                    <p>Content: I rate this one quite highly.</p>
                  </li>
                  <li class="comment">
                    <p>Content: The best game.</p>
                  </li>
                </ul>
                <p class="no-comment">No comments.</p>
              </div>
              <div class="buttons">
                <a href="#" class="button">
                  Edit
                </a>
                <a href="#" class="button">
                  Delete
                </a>
              </div>
            </div>
            <article class="create-comment">
              <label>Add new comment:</label>
              <form class="form">
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input class="btn submit" type="submit" value="Add Comment" />
              </form>
            </article>
          </section>
          <section id="catalog-page">
            <h1>All Games</h1>
            <div class="allGames">
              <div class="allGames-info">
                <img src="/images/avatar-1.jpg" />
                <h6>Action</h6>
                <h2>Cover Fire</h2>
                <a href="#" class="details-button">
                  Details
                </a>
              </div>
            </div>
            <div class="allGames">
              <div class="allGames-info">
                <img src="/images/avatar-1.jpg" />
                <h6>Action</h6>
                <h2>Zombie lang</h2>
                <a href="#" class="details-button">
                  Details
                </a>
              </div>
            </div>
            <div class="allGames">
              <div class="allGames-info">
                <img src="/images/avatar-1.jpg" />
                <h6>Action</h6>
                <h2>MineCraft</h2>
                <a href="#" class="details-button">
                  Details
                </a>
              </div>
            </div>
            <h3 class="no-articles">No articles yet</h3>
          </section>
        </div>
      </body>
    </div>
  );
}

export default App;
