import classNames from "classnames";

interface CloseIconProps {
  width: number;
  height?: number;
  color: `#${string}`;
  className?: string;
  [x: string]: any;
}

const CloseIcon = ({
  width,
  height,
  color,
  className,
  ...rest
}: CloseIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      viewBox="0 0 400 400"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={color}
      fillRule="evenodd"
      className={classNames(className && className)}
      {...rest}
    >
      <path
        fill={color}
        d="M197.489 172.1422q13.742 12.8576 29.3631 25.3394Q306.05 112.85 399.5 99.5q0-55-50-50 0-50-50-50-47.4125 104.3075-102.011 172.6422zm4.022 54.7156Q146.9125 295.1925 99.5 399.5q-50 0-50-50-50 0-50-50 93.45-13.35 172.6479-97.9816 12.8519-13.7493 25.3337-29.3705 13.7494 12.8519 29.3705 25.3337Q295.1925 252.0875 399.5 299.5q0 50-50 50 0 50-50 50-13.35-93.45-97.989-172.6422zm-29.3688-25.3468q12.8576-13.7419 25.3394-29.3631Q112.85 92.95 99.5-.5q-55 0-50 50-50 0-50 50 104.3075 47.4125 172.6422 102.011z"
      />
    </svg>
  );
};

export default CloseIcon;
