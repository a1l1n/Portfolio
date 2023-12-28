import React, { useState } from 'react';
import CV from "../../../assets/CV-Tobares Ailin.pdf";
import books from '../../../assets/Data/books';
import playList from '../../../assets/Data/songs';
import { BooksIcons, 
  PdfIcon, 
  YoutubeIcon, 
  Barchart, 
  Kitty, 
  Paint, 
  Star } from '../../../assets/Icons';
import Styles from './Conection.module.css';

export const Conection = () => {
  const [favBooks, setFavBooks] = useState(0);
  const [favSong, setFavSong] = useState(0);

  const handleNextRecommendation = () => {
    setFavBooks((prevIndex) => (prevIndex + 1) % books.length);
  };

  const handleNextSong = () => {
    setFavSong((prevIndex) => (prevIndex +1) % playList.length)
  }

  return (
    <div className={Styles.conection_container}>
      <div className={Styles.conection_tag}>
        <div className={Styles.conection_icon}><PdfIcon /></div>
      <a download="" href={CV} className={Styles.about_button_a}>Download CV</a>
      </div>
      <div className={`${Styles.conection_tag} ${Styles.conection_tag_yt}`}>
        <div className={Styles.conection_icon}><YoutubeIcon /></div>
        <a href={playList[favSong]}
        target='_blank'
        onClick={handleNextSong}
        >
        Favorito Random
        </a>
      </div>
      <div className={`${Styles.conection_tag} ${Styles.conection_tag_book}`}>
        <div className={Styles.conection_icon}><BooksIcons /></div>
        <a href={books[favBooks]}
        target='_blank'
        onClick={handleNextRecommendation}>
          Recomendación
        </a>
      </div>
    </div>
  )
}
