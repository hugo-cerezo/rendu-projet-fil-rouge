import React, { useState, useEffect } from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";
import LoginPage from "./LoginPage";  // N'oubliez pas d'importer LoginPage.

const App = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className="container">
      {!login ? (
        <LoginPage onLogin={setLogin} />
      ) : (
        <>
          <h1>Créer un topic</h1>
          <PostCreate />
          <hr />
          <h1>Sujet</h1>
          <PostList />
        </>
      )}
    </div>
  );
};

export default App;
