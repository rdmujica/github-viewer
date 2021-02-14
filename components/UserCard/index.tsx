import React from 'react'
import Link from 'next/link'

import { Image, Label, Div, Anchor, LabelRepo, DivRepo } from './styles'

const DEFAULT_IMAGE = ''

interface IUser {
  cover?: string
  path?: string
  name?: string
  repository?: string
}

export const User = ({
  cover = DEFAULT_IMAGE,
  path = '#',
  name = '',
  repository = ''
}: IUser) => (
  <Link href={`/user?login=${name}`} passHref>
    <Anchor>
      <Div>
        <Image src={cover} alt={name} />
        <Label>{`@${name}`}</Label>
        {repository && (
          <DivRepo>
            <LabelRepo>{repository}</LabelRepo>
          </DivRepo>
        )}
      </Div>
    </Anchor>
  </Link>
)
