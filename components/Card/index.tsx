import React from 'react'

import { Image, Label, CardWrapper, LabelRepo, RepoWrapper } from './styles'

const DEFAULT_IMAGE = ''

interface IUser {
  cover?: string
  name?: string
  repository?: string
}

export const Card = ({
  cover = DEFAULT_IMAGE,
  name = '',
  repository
}: IUser) => (
  <CardWrapper>
    <Image src={cover} alt={name} />
    <Label>{`@${name}`}</Label>
    {repository && (
      <RepoWrapper>
        <LabelRepo>{repository}</LabelRepo>
      </RepoWrapper>
    )}
  </CardWrapper>
)
