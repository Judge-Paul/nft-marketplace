import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthProvider from "./store/AuthContext";
import Spinner from "./components/Spinner";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorPage from "./pages/ErrorPage";
import { Helmet } from "react-helmet";

const queryClient = new QueryClient();

const HomePage = lazy(() => import("./pages/HomePage"));
const MarketplacePage = lazy(() => import("./pages/MarketplacePage"));
const ConnectPage = lazy(() => import("./pages/ConnectPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RankingsPage = lazy(() => import("./pages/RankingsPage"));
const CollectionPage = lazy(() => import("./pages/CollectionPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
	function ScrollToTop() {
		const { pathname } = useLocation();

		useEffect(() => {
			window.scrollTo(0, 0);
		}, [pathname]);

		return null;
	}

	return (
		<div className="bg-[#2B2B2B] scrollbar-hide">
			<Helmet>
				<title>Collectiverse</title>
			</Helmet>
			<BrowserRouter>
				<Toaster richColors position="top-right" />
				<QueryClientProvider client={queryClient}>
					<AuthProvider>
						<Navbar />
						<ScrollToTop />
						<Suspense fallback={<Spinner />}>
							<Routes>
								<Route
									path="/"
									element={<HomePage />}
									errorElement={<ErrorPage />}
								/>
								<Route path="/marketplace" element={<MarketplacePage />} />
								<Route
									path="/rankings"
									element={<RankingsPage />}
									errorElement={<ErrorPage />}
								/>
								<Route path="/connect" element={<ConnectPage />} />
								<Route path="/register" element={<RegisterPage />} />
								<Route path="/login" element={<LoginPage />} />
								<Route
									path="/collection/:slug"
									element={<CollectionPage />}
									errorElement={<ErrorPage />}
								/>
								<Route path="*" element={<NotFoundPage />} />
							</Routes>
						</Suspense>
						<Footer />
					</AuthProvider>
				</QueryClientProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
