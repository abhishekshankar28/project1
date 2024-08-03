import * as React from "react";
import { SVGProps } from "react";

interface ServicesIconProps extends SVGProps<SVGSVGElement> {
  hovered: boolean;
  selected: boolean;
}

const ServicesIcon: React.FC<ServicesIconProps> = ({ selected, hovered, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={30} viewBox="0 0 50 78" {...props}>
    <path
      fill={hovered || selected ? "#fff" : "#2B297E"}
      d="m37.5-.625 2.8-.059c4.433.032 7.727.2 11.302 2.985C54.499 5.56 54.832 7.7 55 12l2.45.113 3.237.2 3.2.175c4.226.695 6.874 2.124 9.727 5.32 2.456 3.883 1.898 8.091 1.886 12.567l.086 2.828c.012 4.339-.037 7.767-2.715 11.317-3.12 2.695-5.347 3.733-9.308 4.792l-3.31.926C43.839 54.081 22.833 54.432 7 48c-2.84-1.943-5.433-3.866-7-7-.32-3.41-.324-6.828-.375-10.25l-.113-2.855c-.057-4.467-.081-7.858 2.734-11.48 2.601-2.281 3.85-3.254 7.191-3.79l2.336-.39c2.76-.291 5.455-.377 8.227-.235l.125-3.188c.898-3.914 1.782-5.35 4.914-7.789C28.97-1.028 33.162-.716 37.5-.625ZM27 8v3h21l-1-4c-3.019-1.51-6.13-1.184-9.438-1.188l-2.064-.037C31.772 5.765 30.18 5.88 27 8Zm9 30-1 4 4 1 1-4-4-1Z"
    />
    <path
      fill={hovered || selected ? "#fff" : "#2C297E"}
      d="m2 51 3.508.84 4.617 1.097 2.305.553C31.062 57.907 49.607 57.044 68 52c1.663-.35 3.328-.692 5-1 .65 14.67.65 14.67-4.357 20.61-6.72 5.685-20.22 3.691-28.51 3.65-2.627-.01-5.253 0-7.88.013-21.435.022-21.435.022-25.911-3.623-4.07-4.601-4.463-8.416-4.404-14.338l.027-3.574L2 51Z"
    />
  </svg>
);

export default ServicesIcon;