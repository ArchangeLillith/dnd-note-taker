import React from "react";
import { NavLink } from "react-router-dom";

interface SideDrawerProps {
	toggleVisible: () => void;
}

const SideDrawer = ({ toggleVisible }: SideDrawerProps) => {
	return (
		<ul className="p-4 overflow-y-auto menu w-80 bg-base-100 text-base-content">
			<li>
				<NavLink to="/" onClick={toggleVisible}>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink to="login" onClick={toggleVisible}>
					Login
				</NavLink>
			</li>
			<li>
				<NavLink to="profile" onClick={toggleVisible}>
					Profile
				</NavLink>
			</li>
			<li>
				<NavLink to="register" onClick={toggleVisible}>
					Register
				</NavLink>
			</li>
			<li>
				<NavLink to="notes" onClick={toggleVisible} end={true}>
					Notes
				</NavLink>
			</li>
			<li>
				<NavLink onClick={toggleVisible} to="/notes/new">
					Add Note
				</NavLink>
			</li>
		</ul>
	);
};

export default SideDrawer;
