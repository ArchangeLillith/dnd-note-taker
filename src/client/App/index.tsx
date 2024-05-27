import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AppRoutes from "./AppRoutes";
import { AuthProvider, Drawer, NavBar, SideDrawer } from "../components";

interface AppProps {}

const App = (propr: AppProps) => {
	const [visible, setVisible] = useState<boolean>(false);

	const toggleVisible = () => setVisible((prev) => !prev);
	return (
		<BrowserRouter>
			<AuthProvider>
				<ToastContainer
					position="bottom-right"
					autoClose={3000}
					draggable={false}
					pauseOnHover={false}
				/>
				<Drawer
					open={visible}
					onClickOverlay={toggleVisible}
					side={<SideDrawer toggleVisible={toggleVisible} />}
				>
					<NavBar toggleVisible={toggleVisible} />
					<AppRoutes />
				</Drawer>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default App;
