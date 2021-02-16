import styled from 'styled-components'

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 230px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #dde3ed;
  border-radius: 20px;
  box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.2);
  margin: 10px;
  cursor: pointer;
`
export const Image = styled.img`
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  width: 200px;
  height: 200px;
`

export const Label = styled.span`
  font-size: 18px;
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
  color: #000;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
`
export const RepoWrapper = styled.div`
  background-color: #8d00ff;
  border-radius: 10px;
  padding: 4px 6px;
  margin-top: 5px;
  max-width: 210px;
  text-align: center;
`
export const LabelRepo = styled.span`
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
  color: #fff;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
`
