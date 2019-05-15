import React from 'react'
import lampOff from '../../assets/lamp-off.svg'
import lampOn from '../../assets/lamp-on.svg'
import './lamp.scss'

const Lamp = ({ on }) => (<img src={on ? lampOn : lampOff} className="lamp" alt="logo" />)

export default Lamp
