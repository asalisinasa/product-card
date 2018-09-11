import React from 'react'
import styled from 'styled-components'
import Tooltip from '../tooltip'
import IconVerified from '../icons/IconVerified'
import IconDelivery from '../icons/IconDelivery'
import IconFastsell from '../icons/IconFastsell'
import IconLikeFill from '../icons/IconLikeFill'
import IconPhoto from '../icons/IconPhoto'
import IconNewWindow from '../icons/IconNewWindow'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  list-style: none;

  * {
    box-sizing: border-box;
  }
`

const Container = styled.li`
  width: 50%;
  min-width: 146px;
  margin-bottom: 8px;
  padding: 0 4px;

  @media (min-width: 590px) {
    width: 33%;
    margin-bottom: 16px;
    padding: 0 8px;
  }
`

const CardWrapper = styled.figure`
  position: relative;
  display: block;
  width: 100%;
  margin: 0;
  background-color: #fff;
  border-radius: 4px;

  @media (min-width: 590px) {
    &:hover {
      box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }
`

const CardLink = styled.a`
  display: block;
  text-decoration: none;
`

const PhotoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #ebebeb;
  background-image: url("data:image/svg+xml,%3Csvg className='icon icon-photo' width=%7Bprops.width%7D height=%7Bprops.height%7D xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 11' aria-labelledby='title' %3E%3Ctitle id='title'%3EPhoto Icon%3C/title%3E%3Cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' %3E%3Cg id='component_elements/card/240/Counter' transform='translate(-6.000000, -4.000000)' %3E%3Cg id='Counter' transform='translate(0.000000, -1.000000)'%3E%3Cg id='icons/16/white/photo' transform='translate(4.000000, 3.000000)' %3E%3Cg id='Star'%3E%3Crect id='Rectangle' x='0' y='0' width='16' height='16' /%3E%3Cpath d='M4.5638852,3 L11.4361148,3 C12.3276335,3 12.6509198,3.09282561 12.9768457,3.2671327 C13.3027716,3.4414398 13.5585602,3.69722837 13.7328673,4.0231543 C13.9071744,4.34908022 14,4.67236646 14,5.5638852 L14,10.4361148 C14,11.3276335 13.9071744,11.6509198 13.7328673,11.9768457 C13.5585602,12.3027716 13.3027716,12.5585602 12.9768457,12.7328673 C12.6509198,12.9071744 12.3276335,13 11.4361148,13 L4.5638852,13 C3.67236646,13 3.34908022,12.9071744 3.0231543,12.7328673 C2.69722837,12.5585602 2.4414398,12.3027716 2.2671327,11.9768457 C2.09282561,11.6509198 2,11.3276335 2,10.4361148 L2,5.5638852 C2,4.67236646 2.09282561,4.34908022 2.2671327,4.0231543 C2.4414398,3.69722837 2.69722837,3.4414398 3.0231543,3.2671327 C3.34908022,3.09282561 3.67236646,3 4.5638852,3 Z M8,11 C9.65685425,11 11,9.65685425 11,8 C11,6.34314575 9.65685425,5 8,5 C6.34314575,5 5,6.34314575 5,8 C5,9.65685425 6.34314575,11 8,11 Z' id='Combined-Shape' fill='%23FFFFFF' /%3E%3Crect id='Rectangle-3' fill='%23FFFFFF' x='5' y='2' width='6' height='2' rx='1' /%3E%3Ccircle id='Oval-2' fill='%23FFFFFF' cx='8' cy='8' r='2' /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.26)
    );
    opacity: .9;
  }

  @media (min-width: 590px) {

    ${CardWrapper}:hover &::after {
        opacity: 1;
    }
  }
`

const Photo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: auto;
  transform: translate(-50%, -50%);
`

const Tag = styled.p`
  position: absolute;
  top: ${props => (props.top ? '8px' : 'initial')};
  left: ${props => (props.left ? '8px' : 'initial')};
  right: ${props => (props.right ? '8px' : 'initial')};
  bottom: ${props => (props.bottom ? '8px' : 'initial')};
  z-index: 1;
  display: flex;
  align-items: center;
  min-height: 20px;
  margin: 0;
  padding: 0 4px;
  border-radius: 2px;
  font-family: ${props =>
    props.locked ? 'Fira Sans, sans-serif' : 'Open Sans, sans-serif'};
  font-size: ${props => (props.locked ? '12px' : '14px')};
  font-weight: 400;
  line-height: ${props => (props.locked ? '20px' : '1.4')};
  letter-spacing: ${props => (props.locked ? '1.2px' : '0')};
  text-transform: ${props => (props.locked ? 'uppercase' : 'none')};
  white-space: nowrap;
  color: #fff;
  background-color: ${props =>
    props.locked ? '#F75059' : 'rgba(0, 0, 0, .2)'};

  .icon-photo {
    margin-right: 4px;
  }

  @media (min-width: 590px) {
    top: ${props => (props.top ? '16px' : 'initial')};
    left: ${props => (props.left ? '15px' : 'initial')};
    right: ${props => (props.right ? '10px' : 'initial')};
    bottom: ${props => (props.bottom ? '15px' : 'initial')};
    padding: 0 5px;

    .icon-photo {
      width: 13px;
      height: 12px;
      margin-right: 6px;
    }
  }
`

const Description = styled.figcaption`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 8px 0 12px;
  background: #fff;

  @media (min-width: 590px) {
    padding-left: 16px;
  }
`

const ProductName = styled.h2`
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #8f8f8f;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
`

const ProductPrice = styled.span`
  width: calc(100% - 76px);
  align-self: center;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  color: #393939;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;

  @media (min-width: 590px) {
    width: calc(100% - 104px);
    font-size: 20px;
  }
`

const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 68px;
  height: 20px;
  margin-left: auto;
  padding-right: 4px;

  @media (min-width: 590px) {
    width: 88px;
    height: 32px;
    padding-right: 10px;
  }
`

const IconWrapper = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin-right: 4px;
  padding: 2px;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;

  .icon {
    width: 20px;
    height: 20px;
    pointer-events: none;
  }

  .icon-verified {
    width: 18px;
    height: 17px;
  }

  @media (min-width: 590px) {
    width: 32px;
    height: 32px;
    margin-right: 0;

    .icon-verified {
      width: 20px;
      height: 20px;
    }

    &:hover {
      .tooltip {
        display: block;
        opacity: 1;
        visibility: visible;
      }
    }
  }
`

const Like = styled.div`
  position: absolute;
  z-index: 1;
  right: 8px;
  bottom: 8px;
  width: 20px;
  cursor: pointer;

  .icon-wrapper {
    padding: 0 2px 2px;
  }

  .icon-likefill {
    color: ${props => (props.active ? '#F75059' : 'transparent')};
    stroke: ${props => (props.active ? '#F75059' : '#fff')};
  }

  &:hover .icon-likefill {
    color: ${props => (props.active ? '#F75059' : '#fff')};
    stroke: ${props => (props.active ? '#F75059' : '#fff')};
  }

  @media (min-width: 590px) {
    right: 10px;
    bottom: 10px;
    width: 32px;

    .icon-wrapper {
      width: 32px;
      height: 32px;
      padding: 2px;
    }

    .icon {
      width: 20px;
      height: 20px;
    }
  }
`

const Footer = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 10;
  display: none;
  visibility: hidden;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 16px;
  background: #fff;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  transform: translateY(100%);

  @media (min-width: 590px) {

    ${CardWrapper}:hover & {
        display: flex;
        visibility: visible;
    }
  }
`

const Button = styled.a`
  width: 100%;
  height: 32px;
  padding: 0 8px;
  border: none;
  border-radius: 4px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  line-height: 32px;
  text-align: center;
  background: #ebebeb;
  color: #393939;
  cursor: pointer;
`

const Card = props => (
  <CardWrapper className="card__wrapper" aria-labelledby="card-description">
    <CardLink className="card__link" href="#">
      <PhotoWrapper className="card__photo-wrapper">
        <Photo className="card__photo" src={props.photo} alt={props.productname} />
        <Tag className="card__tag" top left>
          <IconPhoto />
          {props.photocount}
        </Tag>
        <Tag className="card__tag" bottom left>
          {props.location}
        </Tag>
        {/* <Tag className="card__tag" top right locked>
          Заблокировано
        </Tag> */}
        <Like className="card__like">
          <IconWrapper className="card__icon-wrapper" aria-describedby="tooltip-like">
            <IconLikeFill />
            <Tooltip id="tooltip-like" text="Добавить в избранное"></Tooltip>
          </IconWrapper>
        </Like>
      </PhotoWrapper>
      <Description className="card__description" id="card-description">
        <ProductPrice>
          {props.productprice}
          &nbsp;₽
        </ProductPrice>
        <Icons className="card__icons">
          <IconWrapper className="card__icon-wrapper" aria-describedby="tooltip-delivery">
            <IconDelivery />
            <Tooltip id="tooltip-delivery" text="Доставка"></Tooltip>
          </IconWrapper>
          <IconWrapper className="card__icon-wrapper" aria-describedby="tooltip-verified">
            <IconVerified />
            <Tooltip id="tooltip-verified" text="Безопасная сделка">Безопасная сделка</Tooltip>
          </IconWrapper>
          <IconWrapper className="card__icon-wrapper">
            <IconFastsell />
            <Tooltip id="tooltip-fastsell" text="Премиум"></Tooltip>
          </IconWrapper>
        </Icons>
        <ProductName className="card__product-name">{props.productname}</ProductName>
      </Description>
    </CardLink>
    <Footer className="card__footer">
      <Button className="card__button-more">
        Подробнее
        <IconNewWindow />
      </Button>
    </Footer>
  </CardWrapper>
)

export default () => (
  <List>
    <Container className="card">
      <Card
        productname="Название товара"
        photo="static/photo@4x.png"
        productprice="10&nbsp;000"
        description="I m Jane Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        photocount="4"
        location="Москва"
      />
    </Container>
    <Container className="card card--locked">
      <Card
        productname="Название товара"
        photo="static/photo@4x.png"
        productprice="5&nbsp;000"
        description="I m Bob smith a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        photocount="1"
        location="500м"
      />
    </Container>
    <Container className="card">
      <Card
        productname="Название товара"
        photo="static/photo@4x.png"
        productprice="5&nbsp;000"
        description="I m Bob smith a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        photocount="1"
        location="500м"
      />
    </Container>
    <Container className="card">
      <Card
        productname="Название товара"
        photo="static/photo@4x.png"
        productprice="5&nbsp;000"
        description="I m Bob smith a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        photocount="1"
        location="500м"
      />
    </Container>
  </List>
)
