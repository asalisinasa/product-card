import React from 'react'
import styled from 'styled-components'

const Container = styled.li`
  width: 30%;
  margin-bottom: 8px;
  padding: 0 4px;
  border: 1px solid red;

  @media screens and (min-width: 590px) {
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

      // Задаем высоту равную ширине блока
      padding-top: 100%;
    }

    &::after {
      content: '';
      position
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

const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 12px 0;
`

const ProductName = styled.h2`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: #8f8f8f;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
`

const ProductPrice = styled.span`
  width: calc(100% - 76px);
  margin: 0 0 4px;
  font-size: 16px;
  color: #393939;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;

  @media screens and (min-width: 590px) {
    width: calc(100% - 104px);
  }
`

const Badges = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 68px;
  height: 20px;
  margin-left: auto;
  border-radius: 1px solid black;
  outline: 1px solid purple;

  @media screens and (min-width: 590px) {
    width: 88px;
    height: 24px;
  }
`

const Icon = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 4px;
  outline: 1px solid purple;

  @media screens and (min-width: 590px) {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  &:last-child {
    margin-right: 0;
  }
`

const ProductCard = props => (
  <ProductCardWrapper>
    <PhotoWrapper>
      <Photo src={props.photo} alt={props.productname} />
    </PhotoWrapper>
    <Description>
      <ProductPrice>{props.productprice} ₽</ProductPrice>
      <Badges>
        <Icon>
          <use xlinkHref="./assets/icons#verified" />
        </Icon>
        {/* <Icon name="verified" /> */}
      </Badges>
      <ProductName>{props.productname}</ProductName>
    </Description>
  </ProductCardWrapper>
)

export default () => (
  <Container>
    <ProductCard
      productname="Куртка &quot;Dolce & Gabana&quot;"
      photo="https://cache3.youla.io/files/images/720_720_out/59/cc/59cc96e865bcf11d2e2e54e5.jpg"
      productprice="10 000"
      description="I m Jane Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <ProductCard
      productname="Новые мужские ботинки Fabiani"
      photo="https://cache3.youla.io/files/images/720_720_out/5a/ee/5aeefdb9d138b3ae49616274.jpg"
      productprice="5 000"
      description="I m Bob smith a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Container>
)
