import styled from 'styled-components'

export const SongsList = styled.li`
  list-style-type: none;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LogoContainers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SongsPic = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 12px;
`
export const TitleContainers = styled.div`
  padding: 2px;
`
export const Name = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  margin-right: 14px;
`
export const Genre = styled(Name)`
  color: #3b82f6;
`
export const DurationDeleteContainer = styled(LogoContainers)`
  padding: 0px;
`
export const DeleteButton = styled.button`
  background-color: transparent;
  border-width: 0px;
`
