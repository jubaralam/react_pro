import React from "react";

const Movie = () => {
  const imgUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqL5p8M0_fiTJGhflBH-ZMDAhvo3uEenP1LIOSTHi5oQ&s";
  return (
    <div className="
   flex justify-center items-center flex-col border border-red-500 w-[250px] text-white h-[400px] my-5 mx-2">
      <div className=" w-[250px] bg-cover">
        <img src={imgUrl} alt="Poster" 
        className="w-[250px]"/>
      </div>
      <h1 className="font-bold">Title </h1>
      <p>Des</p>
    </div>
  );
};

export default Movie;
