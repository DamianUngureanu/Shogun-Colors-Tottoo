import classNames from "classnames";

interface ArrowProps {
  width: number;
  height?: number;
  color: `#${string}`;
  className?: string;
  [x: string]: any;
}

const Arrow = ({ width, height, color, className, ...rest }: ArrowProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      viewBox="0 0 100 150"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={color}
      fillRule="evenodd"
      className={classNames(className && className)}
      {...rest}
    >
      <defs>
        <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="25%" stopColor="rgb(130, 149, 156)" />
          <stop offset="50%" stopColor="rgb(219, 231, 245)" />
          <stop offset="75%" stopColor="rgb(130, 149, 156)" />
        </linearGradient>
        <mask id="svgMaskArrow">
          <g fill={color}>
            <path
              fill={color}
              d="M41.9957-.5c-60.0002 0-60.0001 75 25 75-84.9984 0-84.998 75-25.0002 75-49.997 0-49.9951-75 35.0045-75-84.9972 0-84.9979-75-35.0043-75zm22.5 0c-60.0002 0-60.0001 75 25 75-84.9984 0-84.998 75-25.0002 75-49.997 0-49.9951-75 35.0045-75-84.9972 0-84.9979-75-35.0043-75zM7 59.5c0 9.5 20 15 30 15-10 0-30 5-30 15-5.0002-10 0-15 5-15-5.0025 0-10.0017-5-5-15z"
            />
          </g>
        </mask>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="url(#myGradient)"
        mask="url(#svgMaskArrow)"
      />
    </svg>
  );
};

export default Arrow;
