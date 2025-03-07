import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./output.css";
import { HomePage } from "./pages/Homepage";
import { AppContextProvider } from "./context/AppContextProvider";
import { Flags } from "./pages/Flags";
import { Segments } from "./pages/Segments";
import { Dashboard } from "./pages/Dashboard";
import PrivateRoute from "./components/shared/PrivateRoute";
import { NotificationProvider } from "./components/shared/NotificationProvider";

const App: React.FC = () => {
	return (
		<AppContextProvider>
			<NotificationProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route
							path="/dashboard"
							element={
								<PrivateRoute>
									<Dashboard />
								</PrivateRoute>
							}
						/>
						<Route
							path="/flags"
							element={
								<PrivateRoute>
									<Flags />
								</PrivateRoute>
							}
						/>
						<Route
							path="/segments"
							element={
								<PrivateRoute>
									<Segments />
								</PrivateRoute>
							}
						/>
					</Routes>
				</BrowserRouter>
			</NotificationProvider>
		</AppContextProvider>
	);
};

export default App;
