export type ArrowIconProps = {
  size?: number
} & React.HTMLAttributes<SVGElement>

function ArrowIcon({ size = 12, ...rest }: ArrowIconProps) {
  return (
    <svg
      fill="none"
      color="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      width={size}
      height={size}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10A.75.75 0 0 1 0 6Z"
        fill="#CCC7C3"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.28.47a.75.75 0 0 1 0 1.06L1.81 6l4.47 4.47a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0Z"
        fill="#CCC7C3"
      />
    </svg>
  )
}

export default ArrowIcon
