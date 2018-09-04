import React from 'react'
import styled from 'styled-components'

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
  background-color: #fff;
  border-radius: 4px;
`

const PhotoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 4px;

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
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .16));
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
  top: ${props => props.top ? '8px' : 'initial'};
  left: ${props => props.left ? '8px' : 'initial'};
  right: ${props => props.right ? '8px' : 'initial'};
  bottom: ${props => props.bottom ? '8px' : 'initial'};
  z-index: 1;
  min-height: 20px;
  margin: 0;
  padding: ${props => props.locked ? '0 5px' : '2px 6px'};
  border-radius: 2px;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  line-height: ${props => props.locked ? '20px' : '1.4'};
  text-transform: ${props => props.locked ? 'uppercase' : 'none'};
  white-space: nowrap;
  color: #FFF;
  background-color: ${props => props.locked ? '#F75059' : 'rgba(0, 0, 0, .2)'};

  @media (min-width: 590px)  {
    top: ${props => props.top ? '10px' : 'initial'};
    left: ${props => props.left ? '10px' : 'initial'};
    right: ${props => props.right ? '10px' : 'initial'};
    bottom: ${props => props.bottom ? '10px' : 'initial'};
  }
`

const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8px 0 12px;
`

const ProductName = styled.h2`
  margin: 0;
  font-family: 'Fira Sans', sans-serif;
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
  margin: 0 0 4px;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  color: #393939;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;

  @media (min-width: 590px) {
    width: calc(100% - 104px);
  }
`

const Badges = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 68px;
  height: 24px;
  margin-left: auto;

  @media (min-width: 590px) {
    width: 88px;
    height: 32px;
  }
`
const Tooltip = styled.p`
  position: absolute;
  top: -8px;
  right: -8px;
  z-index: 10;
  min-height: 24px;
  margin: 0;
  padding: 4px 6px;
  border-radius: 4px;
  font-family: 'Fira Sans', sans-serif;
  font-size: 12px;
  line-height: 1.4;
  white-space: nowrap;
  color: #FFF;
  background-color: rgba(57, 57, 57, .9);
  transform: translateY(-100%);
  display: none;
  opacity: 0;
  visibility: hidden;

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
  width: 24px;
  height: 24px;
  margin-right: 4px;
  background: transparent;
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;

  @media (min-width: 590px) {
    width: 32px;
    height: 32px;
    margin-right: 8px;

    &:hover {
      ${Tooltip} {
        display: block;
        opacity: 1;
        visibility: visible;
      }
    }
  }

  &:last-child {
    margin-right: 0;
  }
`

const Icon = styled.svg`
  display: inline-block;
  vertical-align: middle;

  @media (min-width: 590px) {
    width: 24px;
    height: 24px;
  }
`

const Like = styled.div`
  position: absolute;
  z-index: 1;
  right: 8px;
  bottom: 8px;
  cursor: pointer;

  @media (min-width: 590px) {
    right: 10px;
    bottom: 10px;
  }
`

// SVG Icons
const IconVerified = '<g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="icons/24/others/icon-secure_1" transform="translate(-3.000000, -2.000000)"><g id="Icon/verifiedBig"><polygon id="Shape" transform="translate(12.000000, 12.000000) scale(1, -1) translate(-12.000000, -12.000000) " points="24 0 0 0 0 24 24 24"></polygon><path d="M21,4 L12,2 L3,4 L3,13.5055556 C3.00034976,16.9062551 5.23759572,19.9124261 8.52375,20.9277778 L12,22 L15.47625,20.9277778 C18.7624043,19.9124261 20.9996502,16.9062551 21,13.5055556 L21,4 Z" id="Shape" fill="#6CA232"></path><path d="M8.15712102,10.1310568 L6.6,11.8679152 L10.0164289,15.2709651 C10.4528017,15.7096783 11.1371772,15.7096783 11.5735499,15.2709651 L18,8.93685839 L16.442879,7.2 L10.7949894,12.7513704 L8.15712102,10.1310568 Z" id="Path-2" fill="#FFFFFF"></path></g></g></g>'
const IconDelivery = '<g fill="none" fill-rule="evenodd"><polygon transform="translate(12 12) scale(1 -1) translate(-12 -12)" points="24 0 0 0 0 24 24 24"/><path d="m2 7.5v-2c0-0.82843 0.67157-1.5 1.5-1.5h8c0.82843 0 1.5 0.67157 1.5 1.5v0.5h4.0925c0.49439 0 0.95702 0.24361 1.2368 0.65124l3.1443 4.5816c0.34292 0.49968 0.52646 1.0915 0.52646 1.6975v3.5696c0 0.71045-0.49391 1.3055-1.1571 1.4606-0.40051 1.1857-1.522 2.0394-2.8429 2.0394-1.3062 0-2.4175-0.83481-2.8293-2h-6.3414c-0.41184 1.1652-1.5231 2-2.8293 2-1.3209 0-2.4424-0.85366-2.8429-2.0394-0.66318-0.15509-1.1571-0.75018-1.1571-1.4606v-9zm13.3 0.5c-0.16569 0-0.3 0.13431-0.3 0.3v3.4c0 0.16569 0.13431 0.3 0.3 0.3h3.8915c0.098873 0 0.19499-0.032563 0.27351-0.092658 0.19735-0.15105 0.23489-0.4335 0.083835-0.63085l-2.3277-3.0412c-0.11353-0.14833-0.28967-0.23532-0.47646-0.23532h-1.4447zm-9.3 10.5c0.82843 0 1.5-0.67157 1.5-1.5s-0.67157-1.5-1.5-1.5-1.5 0.67157-1.5 1.5 0.67157 1.5 1.5 1.5zm12 0c0.82843 0 1.5-0.67157 1.5-1.5s-0.67157-1.5-1.5-1.5-1.5 0.67157-1.5 1.5 0.67157 1.5 1.5 1.5z" fill="#597A9E" fill-rule="nonzero"/></g>'
const IconLike = '<g fill="none" fill-rule="evenodd"><rect width="24" height="24"/><path d="m12 5.3c1.0615-0.95008 2.4633-1.8 4-1.8 3.3137 0 5.5 2.1863 5.5 5.5 0 4.8362-4.506 8.6637-9.0754 11.4-0.23223 0.14454-0.61341 0.14452-0.8463 0-4.5997-2.7273-9.0783-6.5635-9.0783-11.4 0-3.3137 2.1863-5.5 5.5-5.5 1.5367 0 2.9385 0.84992 4 1.8z" fill-rule="nonzero" stroke="#ffffff"/></g>'
const IconPhoto = '<g fill="none" fill-rule="evenodd"><g transform="translate(-6 -4)"><g transform="translate(0 -1)"><g transform="translate(4 3)"><rect width="16" height="16"/><path d="m4.5639 3h6.8722c0.89152 0 1.2148 0.092826 1.5407 0.26713 0.32593 0.17431 0.58171 0.4301 0.75602 0.75602 0.17431 0.32593 0.26713 0.64921 0.26713 1.5407v4.8722c0 0.89152-0.092826 1.2148-0.26713 1.5407s-0.4301 0.58171-0.75602 0.75602-0.64921 0.26713-1.5407 0.26713h-6.8722c-0.89152 0-1.2148-0.092826-1.5407-0.26713-0.32593-0.17431-0.58171-0.4301-0.75602-0.75602-0.17431-0.32593-0.26713-0.64921-0.26713-1.5407v-4.8722c0-0.89152 0.092826-1.2148 0.26713-1.5407 0.17431-0.32593 0.4301-0.58171 0.75602-0.75602 0.32593-0.17431 0.64921-0.26713 1.5407-0.26713zm3.4361 8c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3 1.3431 3 3 3z" fill="#fff"/><rect x="5" y="2" width="6" height="2" rx="1" fill="#fff"/><circle cx="8" cy="8" r="2" fill="#fff"/></g></g></g></g>'


const Card = (props) => (
  <ProductCardWrapper>
    <PhotoWrapper>
      <Photo src={props.photo} alt={props.productname} />
      <Tag top left>
        <Icon width='16' height='13' dangerouslySetInnerHTML={{ __html: IconPhoto }}></Icon>
        {props.photocount}
      </Tag>
      <Tag bottom left>
        {props.location}
      </Tag>
      <Tag top right locked>
        Заблокировано
      </Tag>
      <Like>
        <IconWrapper>
          <Icon width='24' height='24' dangerouslySetInnerHTML={{ __html: IconLike }}></Icon>
          <Tooltip>Добавить в избранное</Tooltip>
        </IconWrapper>
      </Like>
    </PhotoWrapper>
    <Description>
      <ProductPrice>{props.productprice} ₽</ProductPrice>
      <Badges>
        <IconWrapper>
          <Icon width='18' height='20' dangerouslySetInnerHTML={{ __html: IconVerified }}></Icon>
          <Tooltip>Безопасная сделка</Tooltip>
        </IconWrapper>
        <IconWrapper>
          <Icon width='24' height='24' dangerouslySetInnerHTML={{ __html: IconDelivery }}></Icon>
          <Tooltip>Доставка</Tooltip>
        </IconWrapper>
      </Badges>
      <ProductName>{props.productname}</ProductName>
    </Description>
  </ProductCardWrapper>
)

export default () => (
  <List>
    <Container>
      <Card
        productname="Куртка &quot;Dolce & Gabana&quot;"
        photo="https://bigriverequipment.com/wp-content/uploads/2017/10/no-photo-available.png"
        productprice="10 000"
        description="I m Jane Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        photocount="4"
        location="Москва"
      />
    </Container>
    <Container>
      <Card
        productname="Новые мужские ботинки Fabiani"
        photo="https://bigriverequipment.com/wp-content/uploads/2017/10/no-photo-available.png"
        productprice="5 000"
        description="I m Bob smith a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        photocount="1"
        location="500м"
      />
    </Container>
  </List>
)
