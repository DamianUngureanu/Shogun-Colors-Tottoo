import classNames from "classnames";

interface QueteDesignProps {
  width: number;
  height?: number;
  color: `#${string}`;
  className?: string;
  [x: string]: any;
}

const QueteDesign = ({
  width,
  height,
  color,
  className,
  ...rest
}: QueteDesignProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      viewBox="0 0 750 70"
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
          <stop offset="25%" stopColor="#e0e0e0ff" />
          <stop offset="50%" stopColor="#e0e0e0ff" />
          <stop offset="75%" stopColor="#e0e0e0ff" />
        </linearGradient>
        <mask id="svgMaskQueteDesign">
          <g fill={color}>
            <path
              fill={color}
              d="M283.7459 24.327c-.8387-4.8529 12.1139-11.2199 29.0399-14.2756s31.2257-1.6085 32.0621 3.2445-12.1173 11.2198-29.044 14.2755-31.2253 1.6086-32.058-3.2444zM349.786.5C99.9025.5 150.432 28.358 50.4774 28.3582c50.5333 7.9592 84.4066-11.9391 199.3537-15.9189C134.884 28.3581 155.4305 48.2564.5 48.2564c129.9401 11.939 219.3463-27.8576 249.3311-23.878C274.8222 28.3582 254.8307 8.4597 349.786.5zm116.1821 23.8273c.8348-4.8529-12.1462-11.2199-29.106-14.2756s-31.29-1.6085-32.1267 3.2445 12.1427 11.2198 29.1028 14.2755 31.2899 1.6086 32.1299-3.2444zM399.786.5003c250.3999 0 199.7617 27.858 299.9204 27.8582-50.6359 7.9592-84.5789-11.9391-199.7615-15.9189 115.1826 15.9188 94.5942 35.8171 249.8411 35.8171-130.2051 11.939-219.7945-27.8576-249.8411-23.878C474.9058 28.3585 494.937 8.46 399.786.5003zm-45 34.9996c0-35 40-34.9999 40 .0001-10-25.0045-30-25.0042-40-.0001zm16-8.7545a3.742 3.742 0 1 1 7.5 0 3.742 3.742 0 1 1-7.5 0z"
            />
          </g>
        </mask>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill="url(#myGradient)"
        mask="url(#svgMaskQueteDesign)"
      />
    </svg>
  );
};

export default QueteDesign;
