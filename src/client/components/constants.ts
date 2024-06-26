//The as const locks in that value which will, when called in another file, intellasense to what it actually is here
export const brandColors = ["primary", "secondary", "accent"] as const;

export const statusColors = ["info", "success", "warning", "error"] as const;

export const bgColors = [
	"base-100",
	"base-200",
	"base-300",
	"neutral",
] as const;

export const componentColors = [
	...brandColors,
	...statusColors,
	"ghost",
] as const;

export const componentSizes = ["lg", "md", "sm", "xs"] as const;
