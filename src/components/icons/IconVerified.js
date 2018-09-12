import React from 'react'

const IconVerified = props => (
  <svg
    className="icon icon-verified"
    width={props.width}
    height={props.height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 20"
    role="presentation"
  >
    <title>Verified Icon</title>
    <g
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g
        transform="translate(-67.000000, -2.000000)"
      >
        <g
          transform="translate(64.000000, 0.000000)"
        >
          <g>
            <polygon
              transform="translate(12.000000, 12.000000) scale(1, -1) translate(-12.000000, -12.000000) "
              points="24 0 0 0 0 24 24 24"
            />
            <path
              d="M21,4 L12,2 L3,4 L3,13.5055556 C3.00034976,16.9062551 5.23759572,19.9124261 8.52375,20.9277778 L12,22 L15.47625,20.9277778 C18.7624043,19.9124261 20.9996502,16.9062551 21,13.5055556 L21,4 Z"
              fill="#6CA232"
            />
            <path
              d="M8.15712102,10.1310568 L6.6,11.8679152 L10.0164289,15.2709651 C10.4528017,15.7096783 11.1371772,15.7096783 11.5735499,15.2709651 L18,8.93685839 L16.442879,7.2 L10.7949894,12.7513704 L8.15712102,10.1310568 Z"
              fill="#FFFFFF"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)
export default () => (
  <IconVerified className="icon icon-verified" width="18" height="15" />
)
