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
import ReactGA from "react-ga4";
import HomePage from "./pages/HomePage";
import CollectionLoading from "./components/CollectionLoading";

const TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;

ReactGA.initialize(TRACKING_ID);

const queryClient = new QueryClient();

const MarketplacePage = lazy(() => import("./pages/MarketplacePage"));
const ConnectPage = lazy(() => import("./pages/ConnectPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RankingsPage = lazy(() => import("./pages/RankingsPage"));
const CollectionPage = lazy(() => import("./pages/CollectionPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const WithSuspense = ({ children, isCollection }) => (
	<Suspense fallback={isCollection ? <CollectionLoading /> : <Spinner />}>
		{children}
	</Suspense>
);

function App() {
	function ScrollToTop() {
		const { pathname } = useLocation();

		useEffect(() => {
			window.scrollTo(0, 0);
		}, [pathname]);

		return null;
	}

	useEffect(() => {
		ReactGA.send({ hitType: "pageview", page: window.location.pathname });
	}, []);

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
						{/* <Suspense fallback={<Spinner />}> */}
						<Routes>
							<Route
								path="/"
								element={<HomePage />}
								errorElement={<ErrorPage />}
							/>
							<Route
								path="/marketplace"
								element={
									<WithSuspense>
										<MarketplacePage />
									</WithSuspense>
								}
								errorElement={<ErrorPage />}
							/>
							<Route
								path="/rankings"
								element={
									<WithSuspense>
										<RankingsPage />
									</WithSuspense>
								}
								errorElement={<ErrorPage />}
							/>
							<Route
								path="/connect"
								element={
									<WithSuspense>
										<ConnectPage />
									</WithSuspense>
								}
								errorElement={<ErrorPage />}
							/>
							<Route
								path="/register"
								element={
									<WithSuspense>
										<RegisterPage />
									</WithSuspense>
								}
								errorElement={<ErrorPage />}
							/>
							<Route
								path="/login"
								element={
									<WithSuspense>
										<LoginPage />
									</WithSuspense>
								}
								errorElement={<ErrorPage />}
							/>
							<Route
								path="/search"
								element={
									<WithSuspense>
										<SearchPage />
									</WithSuspense>
								}
								errorElement={<ErrorPage />}
							/>
							<Route
								path="/collection/:slug"
								element={
									<WithSuspense isCollection>
										<CollectionPage />
									</WithSuspense>
								}
								errorElement={<ErrorPage />}
							/>
							<Route
								path="*"
								element={
									<WithSuspense>
										<NotFoundPage />
									</WithSuspense>
								}
								errorElement={<ErrorPage />}
							/>
						</Routes>
						{/* </Suspense> */}
						<Footer />
					</AuthProvider>
				</QueryClientProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
