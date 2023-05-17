import styled from 'styled-components'

export const PlaylistBackground = styled.div`
  background-color: #152850;
  background-size: cover;
`
export const PlaylistLogoContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png ');
  height: 40vh;
  width: 100vw;
  display: flex;

  justify-content: flex-start;
  align-items: flex-end;
`
export const PlaylistContainer = styled.div`
  padding: 12px;
`
export const SonglistTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160vw;
`
export const Title = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  margin-left: 16px;
`
export const SongName = styled(Title)`
  font-size: 22px;
`
export const SearchImg = styled.input`
  border: 1px solid #ffffff;
  background-color: transparent;
  color: #cbd5e1;
  font-family: 'Roboto';
`
export const UnorderedSongsCard = styled.ul`
  padding: 8px;
`
export const NoSongContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
`
export const NoSongs = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
`
