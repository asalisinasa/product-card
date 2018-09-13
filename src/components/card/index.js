import React from 'react'
import styled from 'styled-components'
import Tooltip from '../tooltip'
import { IconVerified as IconVerified } from '../icons'
import { IconDelivery as IconDelivery } from '../icons'
import { IconFastsell as IconFastsell } from '../icons'
import { IconLikeFill as IconLikeFill } from '../icons'
import { IconPhoto as IconPhoto } from '../icons'
import { IconNewWindow as IconNewWindow } from '../icons'

const List = styled.ul`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  min-width: 292px;
  padding: 0;
  list-style: none;

  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
`

const ListInterest = styled(List)`
  min-width: 240px;
  padding-bottom: 100px;
`

const Title = styled.h3`
  flex-basis: 100%;
  margin-bottom: 24px;
  font-size: 18px;
  color: #8f8f8f;
`

const Container = styled.li`
  width: 50%;
  min-width: 146px;
  margin-bottom: 8px;
  padding: 0 4px;

  @media (min-width: 710px) {
    width: 33%;
    margin-bottom: 16px;
    padding: 0 8px;
  }
`

const ContainerInterest = styled(Container)`
  width: 50%;
  min-width: 120px;
  max-width: 280px;

  @media (min-width: 392px) {
    width: 33%;
  }

  @media (min-width: 710px) {
    width: 25%;

    .card__photo-count {
      top: 10px;
      left: 10px;
    }

    .tooltip {
      right: -18px;
    }
  }
`

const ContainerStatus = styled(Container)`
  .card__like {
    display: none;
    visibility: hidden;
  }
`

const CardWrapper = styled.figure`
  position: relative;
  display: block;
  width: 100%;
  margin: 0;
  background-color: #fff;
  border-radius: 4px;

  &:focus {
    outline: none;
  }

  .icon {
    pointer-events: none;
  }

  @media (min-width: 710px) {
    &:hover,
    &:focus {
      -webkit-box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
      box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }
`

const CardLink = styled.a`
  display: block;
  text-decoration: none;

  &:focus {
    outline: none;
  }
`

const PhotoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 4px;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`

const PhotoContainer = styled.div`
  position: relative;
  border-radius: 4px;
  background-color: #ebebeb;
  background-repeat: no-repeat;
  background-size: cover;

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
    background-image: -webkit-gradient(
      linear,
      left top, left bottom,
      from(rgba(0, 0, 0, 0.1)),
      to(rgba(0, 0, 0, 0.26))
    );
    background-image: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.26)
    );
    background-image: -o-linear-gradient(
      top,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.26)
    );
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.26)
    );
    opacity: 0.9;
  }

  @media (min-width: 710px) {
    ${CardLink}:hover &::after,
    ${CardLink}:focus &::after {
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
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

const PhotoItems = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

const PhotoBadge = styled.p`
  position: absolute;
  z-index: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  max-width: calc(100% - 32px);
  height: 20px;
  margin: 0;
  padding: 0 4px;
  border-radius: 2px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  white-space: nowrap;
  color: #fff;
  background-color: rgba(0, 0, 0, .2);
  overflow: hidden;

  span {
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
  }

  @media (min-width: 710px) {
    max-width: calc(100% - 44px);
    padding: 0 5px;
  }
`

const Status = styled(PhotoBadge)`
  top: 8px;
  right: 8px;
  max-width: 100%;
  font-family: 'Fira Sans', sans-serif;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  background-color: #F75059;

  // utility
  display: none;
  visibility: visible;

  // utility
  ${ContainerStatus} & {
    display: block;
    visibility: visible;
  }

  @media (min-width: 710px) {
    top: 16px;
    right: 16px;
    max-width: 100%;
  }
`

const PhotoCount = styled(PhotoBadge)`
  top: 8px;
  left: 8px;
  display: none;
  visibility: hidden;
  font-size: 12px;

  .icon-photo {
    margin-right: 4px;
  }

  @media (min-width: 710px) {

    & {
      top: 16px;
      left: 16px;
    }

    ${CardLink}:hover & {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      visibility: visible;
    }

    ${ContainerStatus} ${CardLink}:hover & {
      display: none;
      visibility: hidden;
    }

    .icon-photo {
      width: 13px;
      height: 11px;
      margin-right: 6px;
    }
  }
`

const Location = styled(PhotoBadge)`
  left: 8px;
  bottom: 8px;
  max-width: calc(100% - 42px);

  ${ContainerInterest} & {
    left: 5px;
    bottom: 5px;
    max-width: calc(100% - 32px);
  }

  @media (min-width: 710px) {
    left: 16px;
    bottom: 16px;
    max-width: calc(100% - 60px);

    ${ContainerInterest} & {
      left: 10px;
      bottom: 10px;
      max-width: calc(100% - 44px);
    }
  }
`

const Description = styled.figcaption`
  position: relative;
  z-index: 20;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 8px 0 12px;
  background: #fff;

  @media (min-width: 710px) {
    padding-left: 16px;

    ${ContainerInterest} & {
      padding: 8px 10px 10px;
    }

    ${ContainerInterest} & .icon {
      width: 16px;
      height: 16px;
    }
  }
`

const ProductName = styled.h2`
  margin: 0;
  padding-right: 4px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #8f8f8f;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;

  ${ContainerInterest} & {
    padding: 0;
  }

  @media (min-width: 710px) {
    padding-right: 16px;
  }
`

const ProductPrice = styled.span`
  width: calc(100% - 76px);
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
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

  ${ContainerInterest} & {
    width: calc(100% - 50px);
  }

  @media (min-width: 710px) {
    width: calc(100% - 116px);
    font-size: 20px;

    ${ContainerInterest} & {
      font-size: 16px;
    }
  }
`

const Icons = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  width: 68px;
  height: 20px;
  margin-left: auto;
  padding-right: 4px;

  ${ContainerInterest} & {
    width: 28px;
    height: 22px;
    overflow: hidden;
  }

  @media (min-width: 710px) {
    width: 112px;
    height: 32px;
    padding-right: 10px;

    ${ContainerInterest} & {
      width: 48px;
      padding-right: 0;
      overflow: visible;
    }
  }
`

const IconWrapper = styled.div`
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
  }

  .icon-verified {
    width: 18px;
    height: 17px;
  }

  @media (min-width: 710px) {
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

    ${ContainerInterest} & {
      width: 22px;
      height: 22px;
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

  ${ContainerInterest} & {
    bottom: 5px;
    right: 5px;
  }

  .icon-wrapper {
    padding: 0 2px 2px;
  }

  .icon-likefill {
    color: ${props => (props.active ? '#F75059' : 'transparent')};
    stroke: ${props => (props.active ? '#F75059' : '#fff')};
  }

  ${ContainerInterest} .icon-likefill {
    max-width: 16px;
    max-height: 16px;
  }

  @media (min-width: 710px) {
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

    ${ContainerInterest} & {
      width: 26px;
      height: 28px;
    }

    ${ContainerInterest} .icon-likefill {
      width: 28px;
      height: 26px;
    }
  }
`

const Footer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 10;
  display: none;
  visibility: hidden;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 100%;
  height: 48px;
  padding: 0 16px;
  background: #fff;
  border-radius: 0 0 4px 4px;
  -webkit-box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  -webkit-transform: translateY(100%);
  -ms-transform: translateY(100%);
  transform: translateY(100%);

  @media (min-width: 710px) {
    ${CardWrapper}:hover & {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      visibility: visible;
    }

    ${ContainerInterest} & {
      height: 44px;
      padding: 0 10px;
    }
  }
`

const Button = styled.a`
  position: relative;
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

  &:hover {
    color: #393939;
    background-color: #efefef;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .icon {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`

const Card = props => (
  <CardLink className="card__link" href="#">
    <CardWrapper className="card__wrapper">
      <PhotoContainer className="card__photo-container">
        <PhotoWrapper className="card__photo-wrapper">
          <Photo
            className="card__photo"
            src={props.photo}
            alt={props.productname}
          />
        </PhotoWrapper>
        <PhotoItems className="card__photo-items" role="group">
          <PhotoCount className="card__photo-count">
            <IconPhoto width="20" height="20" />
            <span>{props.photocount}</span>
          </PhotoCount>
          <Location className="card__location">
            <span>{props.location}</span>
          </Location>
          <Status className="card__status">
            <span>Заблокировано</span>
          </Status>
          <Like className="card__like">
            <IconWrapper className="card__icon-wrapper">
              <IconLikeFill width="20" height="20" />
              <Tooltip text="Добавить в избранное" />
            </IconWrapper>
          </Like>
        </PhotoItems>
      </PhotoContainer>
      <Description className="card__description">
        <ProductPrice className="card__product-price">
          {props.productprice}
          &nbsp;₽
        </ProductPrice>
        <Icons className="card__icons" role="group">
          <IconWrapper className="card__icon-wrapper">
            <IconDelivery width="20" height="20" />
            <Tooltip text="Доставка" />
          </IconWrapper>
          <IconWrapper className="card__icon-wrapper">
            <IconVerified width="20" height="20" />
            <Tooltip text="Безопасная сделка" />
          </IconWrapper>
          <IconWrapper className="card__icon-wrapper">
            <IconFastsell width="20" height="20" />
            <Tooltip text="Премиум размещение" />
          </IconWrapper>
        </Icons>
        <ProductName className="card__product-name">
          {props.productname}
        </ProductName>
      </Description>
      <Footer className="card__footer">
        <Button className="card__button-more">
          <span>Подробнее</span>
          <IconNewWindow width="18" height="18" />
        </Button>
      </Footer>
    </CardWrapper>
  </CardLink>
)

const CardInterest = styled(Card)`
  min-width: 120px;
`

export default () => (
  <div>
    <Title>Card Default</Title>
    <List>
      <Container className="card">
        <Card
          productname="Название товара"
          photo="static/photo@4x.png"
          productprice="10&nbsp;000"
          photocount="4"
          location="Москва"
        />
      </Container>
      <ContainerStatus className="card card-status">
        <CardInterest
          productname="Длинное название товара"
          photo="static/photo@4x.png"
          productprice="5&nbsp;000"
          photocount="1"
          location="500&nbsp;м"
        />
      </ContainerStatus>
      <Container className="card card--locked">
        <Card
          productname="Очень длинное название товара"
          photo="static/photo@4x.png"
          productprice="5&nbsp;000"
          photocount="25"
          location="Нижний Новгород"
        />
      </Container>
      <Container className="card card--locked">
        <Card
          productname="Название товара"
          photo="static/photo@4x.png"
          productprice="5&nbsp;000"
          photocount="1"
          location="500&nbsp;м"
        />
      </Container>
      <Container className="card">
        <Card
          productname="Название товара"
          photo="static/photo@4x.png"
          productprice="5&nbsp;000"
          photocount="1"
          location="500&nbsp;м"
        />
      </Container>
      <Container className="card">
        <Card
          productname="Название товара"
          photo="static/photo@4x.png"
          productprice="5&nbsp;000"
          photocount="3"
          location="500&nbsp;м"
        />
      </Container>
    </List>

    <Title>Card Interest</Title>
    <ListInterest classNmae="list-interest">
      <ContainerInterest className="card card-interest">
        <CardInterest
          productname="Название товара"
          photo="static/photo@4x.png"
          productprice="5&nbsp;000"
          photocount="1"
          location="500&nbsp;м"
        />
      </ContainerInterest>
      <ContainerInterest className="card card-interest">
        <CardInterest
          productname="Название товара"
          photo="static/photo@4x.png"
          productprice="10&nbsp;000"
          photocount="10"
          location="Москва"
        />
      </ContainerInterest>
      <ContainerInterest className="card card-interest">
        <CardInterest
          productname="Длинное название товара"
          photo="static/photo@4x.png"
          productprice="10&nbsp;000"
          photocount="420"
          location="Нижний Новгород"
        />
      </ContainerInterest>
      <ContainerInterest className="card card-interest">
        <CardInterest
          productname="Название товара"
          photo="static/photo@4x.png"
          productprice="100&nbsp;000"
          photocount="1"
          location="500&nbsp;м"
        />
      </ContainerInterest>
    </ListInterest>
  </div>
)
