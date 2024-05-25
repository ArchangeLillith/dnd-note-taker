import React from "react";
import { twMerge } from "tailwind-merge";

//The extension adds the types for all the div attributes so when we pass a div attribute like id, this componenet knows that that's a div id atttribute and it should be a string. That's why className isn't throwing a fit here, because that's recognized as a div attribute and we have that typing to catch that 
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	optional?: boolean;
}

const Container = ({ children, className, ...rest }: ContainerProps) => {
	return (
		<div
			//Intercepts the incoming css and merges the css in a way that breaks the cascading and overwrites the 'base class' with anything incoming to give us more fine grained control over the styling
			//Overkill if you're never going to need to overwite the base classes
			//Also handles selectors(!)
			className={twMerge(`container px-2 mx-auto md:px-0, ${className}`)}
			{...rest}
		>
			{children}
		</div>
	);
};

export default Container;
