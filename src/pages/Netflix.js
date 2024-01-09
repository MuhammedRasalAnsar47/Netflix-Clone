import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import TopNav from "../components/TopNav";

import { fetchMovies, getGenres } from "../store";
import SliderContainer from "../components/SliderContainer";

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  const movies = useSelector((state)=> state.netflix.movies)
  const generesLoaded = useSelector((state)=>state.netflix.generesLoaded)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
        if(generesLoaded){
          dispatch(fetchMovies({type: "all"}))
        }
  });

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  // console.log(movies)

  return (
    <HeroContainer>
      <div className="hero">
        <TopNav isScrolled={isScrolled} />
        <img
          className="background-image"
          src="https://wallpaperaccess.com/full/2703652.png"
          alt="hero"
        />
        <div className="container">
          <div className="title">
            <h1>Money Heist</h1>
            <p>
            <b>To carry out the biggest heist in history,
             a mysterious man called The Professor recruits a band of eight 
             robbers who have a single characteristic: none of them has anything to lose.
              Five months of seclusion memorizing every step, every detail, 
              every probability culminate in eleven days locked up in the
               National Coinage.</b>
            </p>
          </div>
          <div className="buttons">
            <button onClick={() => navigate("/player")} className="playBtn">
              Play
            </button>
            <button className="moreBtn">More</button>
          </div>
        </div>
      </div>
     <SliderContainer movies={movies}/>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  .hero {
    position: relative;
    .background-image {
      filter: brightness(40%);
    }
    img {
      height: 70vh;
      width: 100%;
    }
    .container {
      position: absolute;
      bottom: 1rem;
      .title {
        h1 {
          margin-left: 5rem;
          text-transform: uppercase;
          font-size: 73px;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
          color: #f7f7f7;
          
        }
        p {
          margin-bottom: -50px;
          width: 640px;
          margin-left: 5rem;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
          color: white;
        }
      }
      .buttons {
        display: flex;
        margin: 5rem;
        gap: 1rem;
      }

      .playBtn {
        color: white;
        border: none;
        font-weight: 1000;
        border-radius: 10px;
        padding-left: 3.5rem;
        padding-right: 3.5rem;
        padding-top: 0.6rem;
        padding-bottom: 0.6rem;
        background-color: rgba(51,51,51, .5);
        cursor: pointer;
      }
      .moreBtn {
        color: white;
        border: none;
        font-weight: 1000;
        border-radius: 10px;
        padding-left: 3.5rem;
        padding-right: 3.5rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        background-color: rgba(51,51,51, .5);
        cursor: pointer;
        cursor: pointer;
      }
    }
  }
`;

export default Netflix;
