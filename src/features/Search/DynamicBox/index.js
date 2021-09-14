import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { language, apiKey, apiBase } from "../../../common/commonValues";
import { Loading } from "./../../../common/Loading/index";
import {
  selectResults,
  setActiveSearchPath,
  selectLoading,
} from "./../SearchSlice";
import { Wrapper } from "./styled";
import { GenerateTile } from "./../generateTile/index";
import { NoResult } from "./../../../common/NoResult/index";
import noPoster from "./../../../noPoster.svg";
import noProfile from "./../../../noProfile.svg";

export const DynamicBox = ({ query }) => {
  const dispatch = useDispatch();
  const results = useSelector(selectResults);
  const loading = useSelector(selectLoading);
  const location = useLocation();
  const pathText = location.pathname.includes("movie") ? "movie" : "person";

  useEffect(() => {
    dispatch(
      setActiveSearchPath(
        `${apiBase}search/${pathText}?api_key=${apiKey}${language}&query=${query}`
      )
    );
  }, [query, dispatch, pathText]);

  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : !results.length ? (
        <NoResult urlQuery={query} />
      ) : (
        results.map((result) => (
          <GenerateTile
            key={result.id}
            pathText={pathText}
            {...(pathText === "movie"
              ? {
                  id: result.id,
                  text: result.title,
                  image: result.poster_path
                    ? `https://image.tmdb.org/t/p/w154${result.poster_path}`
                    : noPoster,
                }
              : {
                  id: result.id,
                  text: result.name,
                  image: result.profile_path
                    ? `https://image.tmdb.org/t/p/w185${result.profile_path}`
                    : noProfile,
                })}
          />
        ))
      )}
    </Wrapper>
  );
};
