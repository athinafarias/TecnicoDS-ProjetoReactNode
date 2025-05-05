import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.error("Erro ao reproduzir áudio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  // Configurar o volume padrão
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className={`music-player ${isPlaying ? 'playing' : ''}`}>
      <button 
        className="sailor-moon-button" 
        onClick={togglePlay} 
        aria-label={isPlaying ? "Pausar música" : "Tocar música da Sailor Moon"}
      />
      
      <audio 
        ref={audioRef} 
        src={`${process.env.PUBLIC_URL}/Sailor Moon OST - Moonlight Densetsu.mp3`} 
        loop
      />
    </div>
  );
};

export default MusicPlayer;