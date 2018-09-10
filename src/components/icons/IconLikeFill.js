import React from 'react'
import styled from 'styled-components'

const IconLikeFill = props => (
  <svg
    className="icon icon-likefill"
    width={props.width}
    height={props.height}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 18"
    aria-labelledby="title"
  >
    <title id="title">LikeFill Icon</title>
    <g
      id="Symbols"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="icons/24/white/like_fill"
        transform="translate(-2.000000, -3.000000)"
      >
        <g id="Group">
          <rect id="Rectangle" x="0" y="0" width="24" height="24" />
          <path
            d="M12,5.30000019 C13.061513,4.34992034 14.4632911,3.5 16,3.5 C19.3137085,3.5 21.5,5.6862915 21.5,9 C21.5,13.8362427 16.9940186,17.6636544 12.4246198,20.3999996 C12.1923928,20.5445368 11.8112082,20.5445174 11.5783218,20.3999996 C6.97857666,17.6727195 2.5,13.8364868 2.5,9 C2.5,5.6862915 4.6862915,3.5 8,3.5 C9.53670887,3.5 10.938487,4.34992034 12,5.30000019 Z"
            id="Combined-Shape"
            stroke="#fff"
            fill="currentColor"
            fill-rule="nonzero"
          />
        </g>
      </g>
    </g>
  </svg>
)
export default () => (
  <IconLikeFill className="icon icon-likefill" width="20" height="18" />
)
