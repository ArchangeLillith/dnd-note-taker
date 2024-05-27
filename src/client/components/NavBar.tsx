import React from "react";
import { GiHamburger } from "react-icons/gi";

interface NavBarProps {
	toggleVisible: () => void;
}

const NavBar = ({ toggleVisible }: NavBarProps) => {
	return (
		<div>
			<button
				onClick={toggleVisible}
				className="px-1 py-1 mx-2 my-2 btn btn-square btn-ghost"
			>
				<GiHamburger size="text-2xl md:text-3xl" />
			</button>
		</div>
	);
};

export default NavBar;
