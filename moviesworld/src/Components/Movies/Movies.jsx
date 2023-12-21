import React from "react";
import MoviesList from "../MoviesList/MoviesList";
import Pagination from "../Pagination/Pagination";
const Movies = () => {
  return (
    <section className="w-full h-auto border p-5 ">
      <MoviesList />
      <Pagination />
    </section>
  );
};

export default Movies;
