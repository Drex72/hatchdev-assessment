import React, { ComponentProps } from "react";
import cn from "clsx";

interface PropsType extends ComponentProps<"div"> {
  width?: string;
  height?: string;
  radius?: string | number;
  color?: string;
}

/**
 * @description A loading spinner displayed when user is routing between pages.
 */
function RouteLoading({
  width = "80",
  height = "80",
  color = "#0255D5",
  radius = 9,
  className,
  ...rest
}: PropsType) {
  return (
    <div
      className={cn(
        "flex justify-center items-center top-0 left-0 z-50 h-dvh w-full",
        className,
      )}
      {...rest}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 120 30"
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        data-testid="three-dots-svg"
      >
        <circle cx="15" cy="15" r={Number(radius) + 6}>
          <animate
            attributeName="r"
            from="15"
            to="15"
            begin="0s"
            dur="0.8s"
            values="15;9;15"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill-opacity"
            from="1"
            to="1"
            begin="0s"
            dur="0.8s"
            values="1;.5;1"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="60"
          cy="15"
          r={radius}
          attributeName="fill-opacity"
          from="1"
          to="0.3"
        >
          <animate
            attributeName="r"
            from="9"
            to="9"
            begin="0s"
            dur="0.8s"
            values="9;15;9"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill-opacity"
            from="0.5"
            to="0.5"
            begin="0s"
            dur="0.8s"
            values=".5;1;.5"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="105" cy="15" r={Number(radius) + 6}>
          <animate
            attributeName="r"
            from="15"
            to="15"
            begin="0s"
            dur="0.8s"
            values="15;9;15"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill-opacity"
            from="1"
            to="1"
            begin="0s"
            dur="0.8s"
            values="1;.5;1"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}

export default RouteLoading;
