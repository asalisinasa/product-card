import React from 'react'
import styled from 'styled-components'

const StyledTooltip = styled.p`
  position: absolute;
  top: -8px;
  right: -12px;
  z-index: 10;
  min-height: 24px;
  margin: 0;
  padding: 4px 8px;
  border-radius: 4px;
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  white-space: nowrap;
  color: #fff;
  background-color: rgba(57, 57, 57, 0.9);
  -webkit-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  -webkit-transition: opacity 0.4s ease-in-out;
  -o-transition: opacity 0.4s ease-in-out;
  transition: opacity 0.4s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    right: 20px;
    width: 16px;
    height: 6px;
    background-image: url("data:image/svg+xml,%0A%3Csvg width='16px' height='6px' viewBox='0 0 16 6' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 51.2 (57519) - http://www.bohemiancoding.com/sketch --%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cdefs%3E%3C/defs%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' opacity='0.899999976'%3E%3Cg id='cards' transform='translate(-452.000000, -918.000000)' fill='%23393939'%3E%3Cg id='tables' transform='translate(100.000000, 192.000000)'%3E%3Cg id='desktop_interest' transform='translate(0.000000, 544.000000)'%3E%3Cg transform='translate(238.000000, 158.000000)'%3E%3Cpolygon id='Triangle' points='122 30 114 24 130 24'%3E%3C/polygon%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-repeat: no-repeat;
  }
`

const Tooltip = props => (
  <StyledTooltip className="tooltip" id={props.id} role="tooltip">
    {props.text}
  </StyledTooltip>
)

export default Tooltip
