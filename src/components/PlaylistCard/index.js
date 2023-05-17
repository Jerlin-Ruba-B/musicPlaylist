import {AiFillDelete} from 'react-icons/ai'
import {
  SongsList,
  LogoContainers,
  SongsPic,
  TitleContainers,
  Name,
  Genre,
  DurationDeleteContainer,
  DeleteButton,
} from './styledComponents'

const PlaylistCard = props => {
  const {songs, updateList} = props

  const deletePlaylist = () => {
    updateList(songs.id)
  }

  return (
    <SongsList>
      <LogoContainers>
        <SongsPic src={songs.imageUrl} alt="track" />
        <TitleContainers>
          <Name>{songs.name}</Name>
          <Genre>{songs.genre}</Genre>
        </TitleContainers>
      </LogoContainers>
      <DurationDeleteContainer>
        <Name>{songs.duration}</Name>
        <DeleteButton onClick={deletePlaylist} data-testid="delete">
          <AiFillDelete color="#ffffff" />
        </DeleteButton>
      </DurationDeleteContainer>
    </SongsList>
  )
}
export default PlaylistCard
