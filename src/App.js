import "./App.css";
import { useState } from "react";
import GameCatalog from "./components/GameCatalog";
import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import CreateGame from "./components/CreateGame";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [page, setPage] = useState("/home");
  const router = {
    "/home": <WelcomeWorld />,
    "/games": <GameCatalog />,
    "/createGame": <CreateGame />,
  };

  const handlerNavigator = (path) => {
    setPage(path);
  };
  return (
    <div id="box">
      <Header handlerNavigator={handlerNavigator} />
      <main id="main-content">{router[page] || <ErrorPage />}</main>
    </div>
  );
}

export default App;
