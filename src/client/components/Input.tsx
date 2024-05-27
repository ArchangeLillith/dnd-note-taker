import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import type { ComponentColors, ComponentSizes } from "./types";

interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "color"> {
	bordered?: boolean;
	color?: ComponentColors;
	size?: ComponentSizes;
}

const Input = ({
	value,
	placeholder,
	type,
	className,
	color,
	bordered = true,
	size,
	...rest
}: InputProps): JSX.Element => {
	const classes = twMerge(
		"input",
		className,
		clsx({
			"input-bordered": bordered,
			[`input-${color}`]: color,
			[`input-${size}`]: size,
		})
	);
	return (
		<input
			{...rest}
			type={type}
			placeholder={placeholder}
			value={value}
			className={classes}
		/>
	);
};

export default Input;
