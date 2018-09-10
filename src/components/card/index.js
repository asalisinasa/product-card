import React from 'react'
import styled from 'styled-components'
import IconVerified from '../icons/IconVerified'
import IconDelivery from '../icons/IconDelivery'
import IconFastsell from '../icons/IconFastsell'
import IconLike from '../icons/IconLike'
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

const ProductCardWrapper = styled.article`
  position: relative;
  background-color: #fff;
  border-radius: 4px;
`

const PhotoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("data:image/svg+xml,%0A%3Csvg width='180px' height='180px' viewBox='0 0 180 180' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch --%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3Crect id='path-1' x='0' y='0' width='180' height='180' rx='4'%3E%3C/rect%3E%3Cpattern id='pattern-2' patternUnits='objectBoundingBox' x='0%25' width='100%25' height='100%25'%3E%3Cuse xlink:href='%23image-3' transform='scale(0.321428571,0.321428571)'%3E%3C/use%3E%3C/pattern%3E%3Cimage id='image-3' width='560' height='560' xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjAAAAIwCAIAAAAXk8Y4AAAABGdBTUEAALGOGCHvlwAALUJJREFUeAHt3WmXGzXaBuBh2CZsgUDIgVn4/z+L4RwYCATCFtbhvYfnjSiq226nJduyffUHUy6XpEeXirrjpd3PPXz48C9+CBAgQIDAsQX+euwCjE+AAAECBP4nIJCcBwQIECAwhYBAmmIZFEGAAAECAsk5QIAAAQJTCAikKZZBEQQIECAgkJwDBAgQIDCFgECaYhkUQYAAAQICyTlAgAABAlMICKQplkERBAgQICCQnAMECBAgMIWAQJpiGRRBgAABAgLJOUCAAAECUwgIpCmWQREECBAgIJCcAwQIECAwhYBAmmIZFEGAAAECAsk5QIAAAQJTCAikKZZBEQQIECAgkJwDBAgQIDCFgECaYhkUQYAAAQICyTlAgAABAlMICKQplkERBAgQICCQnAMECBAgMIWAQJpiGRRBgAABAgLJOUCAAAECUwgIpCmWQREECBAgIJCcAwQIECAwhYBAmmIZFEGAAAECAsk5QIAAAQJTCAikKZZBEQQIECAgkJwDBAgQIDCFgECaYhkUQYAAAQICyTlAgAABAlMICKQplkERBAgQICCQnAMECBAgMIWAQJpiGRRBgAABAgLJOUCAAAECUwgIpCmWQREECBAgIJCcAwQIECAwhYBAmmIZFEGAAAECAsk5QIAAAQJTCAikKZZBEQQIECAgkJwDBAgQIDCFgECaYhkUQYAAAQICyTlAgAABAlMICKQplkERBAgQICCQnAMECBAgMIWAQJpiGRRBgAABAgLJOUCAAAECUwgIpCmWQREECBAgIJCcAwQIECAwhYBAmmIZFEGAAAECAsk5QIAAAQJTCAikKZZBEQQIECAgkJwDBAgQIDCFgECaYhkUQYAAAQICyTlAgAABAlMICKQplkERBAgQICCQnAMECBAgMIWAQJpiGRRBgAABAgLJOUCAAAECUwgIpCmWQREECBAgIJCcAwQIECAwhYBAmmIZFEGAAAECAsk5QIAAAQJTCAikKZZBEQQIECAgkJwDBAgQIDCFgECaYhkUQYAAAQICyTlAgAABAlMICKQplkERBAgQICCQnAMECBAgMIWAQJpiGRRBgAABAgLJOUCAAAECUwgIpCmWQREECBAgIJCcAwQIECAwhYBAmmIZFEGAAAECAsk5QIAAAQJTCAikKZZBEQQIECAgkJwDBAgQIDCFgECaYhkUQYAAAQICyTlAgAABAlMICKQplkERBAgQICCQnAMECBAgMIWAQJpiGRRBgAABAgLJOUCAAAECUwgIpCmWQREECBAgIJCcAwQIECAwhYBAmmIZFEGAAAECAsk5QIAAAQJTCAikKZZBEQQIECAgkJwDBAgQIDCFgECaYhkUQYAAAQICyTlAgAABAlMICKQplkERBAgQICCQnAMECBAgMIWAQJpiGRRBgAABAgLJOUCAAAECUwgIpCmWQREECBAgIJCcAwQIECAwhYBAmmIZFEGAAAECAsk5QIAAAQJTCAikKZZBEQQIECAgkJwDBAgQIDCFgECaYhkUQYAAAQICyTlAgAABAlMICKQplkERBAgQICCQnAMECBAgMIWAQJpiGRRBgAABAgLJOUCAAAECUwgIpCmWQREECBAgIJCcAwQIECAwhYBAmmIZFEGAAAECAsk5QIAAAQJTCAikKZZBEQQIECAgkJwDBAgQIDCFgECaYhkUQYAAAQICyTlAgAABAlMICKQplkERBAgQICCQnAMECBAgMIWAQJpiGRRBgAABAgLJOUCAAAECUwgIpCmWQREECBAgIJCcAwQIECAwhYBAmmIZFEGAAAECAsk5QIAAAQJTCAikKZZBEQQIECAgkJwDBAgQIDCFgECaYhkUQYAAAQICyTlAgAABAlMICKQplkERBAgQICCQnAMECBAgMIWAQJpiGRRBgAABAgLJOUCAAAECUwgIpCmWQREECBAgIJCcAwQIECAwhYBAmmIZFEGAAAECAsk5QIAAAQJTCAikKZZBEQQIECAgkJwDBAgQIDCFgECaYhkUQYAAAQICyTlAgAABAlMICKQplkERBAgQICCQnAMECBAgMIWAQJpiGRRBgAABAgLJOUCAAAECUwgIpCmWQREECBAgIJCcAwQIECAwhYBAmmIZFEGAAAECAsk5QIAAAQJTCAikKZZBEQQIECAgkJwDBAgQIDCFgECaYhkUQYAAAQICyTlAgAABAlMICKQplkERBAgQICCQnAMECBAgMIWAQJpiGRRBgAABAgLJOUCAAAECUwgIpCmWQREECBAgIJCcAwQIECAwhYBAmmIZFEGAAAECAsk5QIAAAQJTCAikKZZBEQQIECAgkJwDBAgQIDCFgECaYhkU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'%3E%3C/image%3E%3C/defs%3E%3Cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='components/cards/Card_like_180'%3E%3Cg id='Card_210_new'%3E%3Cg id='Group-2'%3E%3Cmask id='mask-4' fill='white'%3E%3Cuse xlink:href='%23path-1'%3E%3C/use%3E%3C/mask%3E%3Cuse id='Image' fill='url(%23pattern-2)' xlink:href='%23path-1'%3E%3C/use%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

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
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.16)
    );
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

const Description = styled.div`
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

const Tooltip = styled.p`
  position: absolute;
  top: -8px;
  right: -12px;
  z-index: 10;
  min-height: 24px;
  margin: 0;
  padding: 4px 8px;
  border-radius: 4px;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  white-space: nowrap;
  color: #fff;
  background-color: rgba(57, 57, 57, 0.9);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    right: 20px;
    width: 16px;
    height: 6px;
    background-image: url("data:image/svg+xml,%0A%3Csvg width='16px' height='6px' viewBox='0 0 16 6' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 51.2 (57519) - http://www.bohemiancoding.com/sketch --%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' opacity='0.899999976'%3E%3Cg id='cards' transform='translate(-452.000000, -918.000000)' fill='%23393939'%3E%3Cg id='tables' transform='translate(100.000000, 192.000000)'%3E%3Cg id='desktop_interest' transform='translate(0.000000, 544.000000)'%3E%3Cg id='всплывашка' transform='translate(238.000000, 158.000000)'%3E%3Cpolygon id='Triangle' points='122 30 114 24 130 24'%3E%3C/polygon%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-repeat: no-repeat;
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
  }

  .icon-verified {
    width: 18px;
    height: 17px;
  }

  @media (min-width: 590px) {
    width: 32px;
    height: 32px;
    margin-right: 0;

    // .icon {
    //   width: 24px;
    //   height: 24px;
    // }

    .icon-verified {
      width: 20px;
      height: 20px;
    }

    &:hover {
      ${Tooltip} {
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

  ${IconWrapper} {
    padding: 0 2px 2px;
  }

  .icon-likefill {
    stroke: #fff;
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

    ${IconWrapper} {
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
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 16px;
  background: #fff;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  transform: translateY(100%);
`

const Button = styled.button`
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
  <ProductCardWrapper>
    <PhotoWrapper>
      <Photo src={props.photo} alt={props.productname} />
      <Tag top left>
        <IconPhoto />
        {props.photocount}
      </Tag>
      <Tag bottom left>
        {props.location}
      </Tag>
      {/* <Tag top right locked>
        Заблокировано
      </Tag> */}
      <Like>
        <IconWrapper>
          <IconLikeFill />
          <Tooltip>Добавить в избранное</Tooltip>
        </IconWrapper>
      </Like>
    </PhotoWrapper>
    <Description>
      <ProductPrice>
        {props.productprice}
        &nbsp;₽
      </ProductPrice>
      <Icons>
        <IconWrapper>
          <IconDelivery />
          <Tooltip>Доставка</Tooltip>
        </IconWrapper>
        <IconWrapper>
          <IconVerified />
          <Tooltip>Безопасная сделка</Tooltip>
        </IconWrapper>
        {/* <IconWrapper>
          <IconFastsell />
          <Tooltip>Безопасная сделка</Tooltip>
        </IconWrapper> */}
      </Icons>
      <ProductName>{props.productname}</ProductName>
    </Description>
    <Footer>
      <Button>
        Подробнее
        <IconNewWindow />
      </Button>
    </Footer>
  </ProductCardWrapper>
)

export default () => (
  <List>
    <Container>
      <Card
        productname="Название товара"
        photo=""
        productprice="10&nbsp;000"
        description="I m Jane Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        photocount="4"
        location="Москва"
      />
    </Container>
    <Container>
      <Card
        productname="Название товара"
        photo="https://bigriverequipment.com/wp-content/uploads/2017/10/no-photo-available.png"
        productprice="5&nbsp;000"
        description="I m Bob smith a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        photocount="1"
        location="500м"
      />
    </Container>
    <Container>
      <Card
        productname="Название товара"
        photo="https://bigriverequipment.com/wp-content/uploads/2017/10/no-photo-available.png"
        productprice="5&nbsp;000"
        description="I m Bob smith a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        photocount="1"
        location="500м"
      />
    </Container>
    <Container>
      <Card
        productname="Название товара"
        photo="https://bigriverequipment.com/wp-content/uploads/2017/10/no-photo-available.png"
        productprice="5&nbsp;000"
        description="I m Bob smith a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        photocount="1"
        location="500м"
      />
    </Container>
  </List>
)
