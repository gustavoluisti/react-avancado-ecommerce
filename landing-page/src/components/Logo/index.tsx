import React from 'react'
import * as S from './styles'
import { LogoProps } from 'types/api'

const Logo = ({alternativeText, url }: LogoProps) => <S.LogoWrapper src={`http://localhost:1337${url}`} alt={alternativeText} />

export default Logo
