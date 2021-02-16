import React from 'react'

import { Image, Label, CardWrapper, LabelRepo, RepoWrapper } from './styles'

const DEFAULT_IMAGE = ''

interface ICard {
  cover?: string
  name?: string
  repository?: string
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

export const Card = ({
  cover = DEFAULT_IMAGE,
  name = '',
  repository,
  onClick
}: ICard) => (
  <CardWrapper onClick={onClick}>
    <Image src={cover} alt={name} />
    <Label>{`@${name}`}</Label>
    {repository && (
      <RepoWrapper>
        <LabelRepo>{repository}</LabelRepo>
      </RepoWrapper>
    )}
  </CardWrapper>
)
