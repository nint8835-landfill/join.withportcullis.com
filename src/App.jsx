import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home";
import { Flex } from "@chakra-ui/react";
import { currentUser } from "./State";
import { useAtom } from "jotai";

function App() {
  const [, setUser] = useAtom(currentUser);
  useEffect(() => {
    (async () => {
      const user = await fetch("http://127.0.0.1:8787/users/current", {
        credentials: "include",
      });
      setUser(await user.json());
    })();
  }, [setUser]);

  return (
    <Flex height={"100%"} width={"100%"} flexDirection={"column"}>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </Flex>
  );
}

export default App;
