import styled from "styled-components";
import picture from '../../images/picture@1.png';
import elips from '../../images/Ellipse1.png'
import rectangle from '../../images/Rectangle.png'

export const Card = styled.div`
  position: relative;
  background-image: url(${picture}),
    url(${elips}), url(${rectangle}),
    var(--primery-background-img);
  background-position: top 26px left 36px, top 178px left 150px,
    top 214px left 0px, center;
  /* background-size: 308px 168px, 80px 80px, 380px 8px, cover ; */
  background-repeat: no-repeat;

  width: 380px;
  height: 460px;
  border-radius: 10px;
  padding-top: 28px;
`

export const Logo = styled.img`
  height: 22px;
  width: 76px;
  fill: none;

  position: absolute;
  top: 20px;
  left: 20px;
`


export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  background-color: #471ca9;
  border-radius: 50%;
  border: none;
  margin-left: 164px;
  margin-top: 159px;
  margin-bottom: 35px;
`

export const  Text= styled.li`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24.38px;
  color: var(--primery-text-color);
`

export const Button =styled.button`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 21.94px;

  color: var(--secondary-text-color);
  background-color: ${({isFollowing})=> (isFollowing ?  '#5CD3A8' : '#EBD8FF')} ;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  width: 196px;
  height: 50px;

  padding: 14px 28px;

  &.active {
    background-color: var(--active-button);
  }

  &:hover,
  &:focus {
    box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
  }
`

export const Description =styled.ul`
  display: grid;
  place-items: center;
`


