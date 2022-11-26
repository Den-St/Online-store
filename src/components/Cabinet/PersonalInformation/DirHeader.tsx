import React from 'react'
import { SvgIcon } from '../../../assets/svg/SvgIcon'
import { Arrow, DirHeaderContainer, Label } from './styles'

type Props = {
    $isOpened:boolean;
    toggleOpen:() => void;
}

export const DirHeader:React.FC<Props> = ({$isOpened,toggleOpen}) => {
  return <DirHeaderContainer onClick={toggleOpen}>
        <SvgIcon type="user" width="30px" height="30px"/>
        <Label>Personal information</Label>
        <Arrow> {$isOpened ? <SvgIcon type="downArrow"/> : <SvgIcon type="upArrow"/>} </Arrow>
  </DirHeaderContainer>
}
