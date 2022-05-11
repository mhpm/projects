import { useState } from "react";
import './music-player.css'

interface IButton {
  onClick?: () => void;
  children?: any;
}

const PlayButton = ({ onClick, children }: IButton) => (
  <button
    onClick={onClick}
    aria-label="Play button"
    type="button"
    className="player-controls__btn player-controls__play-btn"
  >
    {children}
  </button>
);

const PauseButton = ({ onClick, children }: IButton) => (
  <button
    onClick={onClick}
    aria-label="Pause button"
    type="button"
    className="player-controls__btn player-controls__pause-btn"
  >
    {children}
  </button>
);

const PreviousButton = ({ onClick, children }: IButton) => (
  <button
    onClick={onClick}
    aria-label="Previous button"
    type="button"
    className="player-controls__btn player-controls__prev-btn"
  >
    {children}
  </button>
)
  ;
const NextButton = ({ onClick, children }: IButton) => (
  <button
    onClick={onClick}
    aria-label="Next button"
    type="button"
    className="player-controls__btn player-controls__next-btn"
  >
    {children}
  </button>
);

const MusicPlayer = () => {
  const tracks = [
    {
      id: 1,
      name: "Yesterday",
      artist: "Beatles",
    },
    {
      id: 2,
      name: "Nothing else matters",
      artist: "Metallica",
    },
    {
      id: 3,
      name: "Always",
      artist: "Bon Jovi",
    },
    {
      id: 4,
      name: "Waka Waka",
      artist: "Shakira",
    },
    {
      id: 10,
      name: "Fuel",
      artist: "Metallica",
    },
    {
      id: 30,
      name: "It's my life",
      artist: "Bon Jovi",
    },
    {
      id: 16,
      name: "Hips",
      artist: "Shakira",
    },
  ];
  const [selectedTrack, setSelectedTrack] = useState({ ...tracks[0] });
  const [isPaused, setPaused] = useState(true);

  const onNextButtonClick = () => {
    let index = tracks.findIndex(track => track.id === selectedTrack.id)
    setSelectedTrack({ ...tracks[index === tracks.length - 1 ? 0 : index + 1] });
  };
  const onPreviousButtonClick = () => {
    // TODO: Write your code here
    let index = tracks.findIndex(track => track.id === selectedTrack.id)
    setSelectedTrack({ ...tracks[index === 0 ? tracks.length - 1 : index - 1] });
  };

  const renderTracks = () =>
    tracks.map((track) => (
      <div
        className={
          `tracks-list__item 
            ${selectedTrack.id === track.id
            ? "tracks-list__item--selected"
            : ""
          }
          `}
        key={track.id}
      >
        <span className="tracks-list__name">{track.name}</span>
        <span className="tracks-list__artist">
          &nbsp;—&nbsp;
          {track.artist}
        </span>
      </div>
    ));

  return (
    <main>
      <div className="tracks-list">
        <h2 className="tracks-list__title">Tracks</h2>
        {renderTracks()}
      </div>
      <div className="player-controls">
        <PreviousButton onClick={() => onPreviousButtonClick()}>{"<<"}</PreviousButton>
        {
          isPaused
            ? <PlayButton onClick={() => setPaused(false)}>{'>'}</PlayButton>
            : <PauseButton onClick={() => setPaused(true)}>||</PauseButton>
        }
        <NextButton onClick={() => onNextButtonClick()}>{">>"}</NextButton>
        {
          isPaused
            ? null
            : <div className="player-controls__track">
              Playing:
              <span className="track__name">{selectedTrack.name}</span>
              <span className="track__artist">{selectedTrack.artist}</span>
            </div>
        }
      </div>
    </main>
  );
};

export default MusicPlayer;
