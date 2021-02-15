import React from 'react'

import { Image, Label, Div, LabelRepo, DivRepo } from './styles'

const DEFAULT_IMAGE = ''

interface IUser {
  cover?: string
  path?: string
  name?: string
  repository?: string
}

export const UserCard = ({
  cover = DEFAULT_IMAGE,
  path = '#',
  name = '',
  repository = ''
}: IUser) => (
  <Div>
    <Image src={cover} alt={name} />
    <Label>{`@${name}`}</Label>
    {repository && (
      <DivRepo>
        <LabelRepo>{repository}</LabelRepo>
      </DivRepo>
    )}
  </Div>
)
