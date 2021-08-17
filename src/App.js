import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Navigation } from "./Navigation";
import { MainContainer } from "./styled";
import MoviesPage from "./features/MoviesPage";
import PeoplePage from "./features/PeoplePage";
import MoviePage from "./features/MoviePage";
import { Error } from "./common/Error";
import { toError, toMovie, toMovies, toPeople } from "./common/routes";

export const App = () => (
  <HashRouter>
    <Navigation />
    <MainContainer>
      <Switch>
        <Route path={toMovie()}>
          <MoviePage />
        </Route>
        <Route path={toMovies()}>
          <MoviesPage />
        </Route>
        <Route path={toPeople()}>
          <PeoplePage />
        </Route>
        <Route path={toError()}>
          <Error />
        </Route>
        <Route>
          <Redirect to={toMovies()} />
        </Route>
      </Switch>
    </MainContainer>
  </HashRouter>
);
