export const toMovies = () => "/movies";
export const toPeople = () => "/people";
export const toError = () => "/error";

export const toMovie = ({ id } = { id: ":id" }) => `/movies/${id}`;
export const toPerson = ({ id } = { id: ":id" }) => `/people/${id}`;