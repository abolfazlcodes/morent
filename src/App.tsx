import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { Toaster } from "react-hot-toast";

import { Suspense, lazy } from "react";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Spinner from "./ui/Spinner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BookmarksProvider } from "./context/Bookmarks";
import { SideBarOpenProvider } from "./context/SidebarOpen";
import ProtectedRoute from "./ui/ProtectedRoute";

const HomePage = lazy(() => import("./pages/HomePage"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const Cars = lazy(() => import("./pages/Cars"));
const SingleCar = lazy(() => import("./pages/Car"));
const Payment = lazy(() => import("./pages/Payment"));
const PaymentSuccess = lazy(() => import("./pages/PaymentSuccess"));

// creating the react query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 1000, // every 10 seconds it should be stale
      // cacheTime: 10 * 1000,
    },
  },
});

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <BookmarksProvider>
        <SideBarOpenProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />

            <GlobalStyles />
            <BrowserRouter>
              <Routes>
                <Route element={<AppLayout />}>
                  <Route index element={<HomePage />} />
                  <Route path='/cars' element={<Cars />} />
                  <Route path='/cars/:carId' element={<SingleCar />} />
                  <Route element={<ProtectedRoute />}>
                    <Route path='/payment/:carId' element={<Payment />} />
                    <Route
                      path='/paymentSuccess'
                      element={<PaymentSuccess />}
                    />
                  </Route>
                </Route>

                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<PageNotFound />} />
              </Routes>
            </BrowserRouter>

            <Toaster
              position='top-center'
              gutter={12}
              reverseOrder={false}
              containerStyle={{ margin: "8px", zIndex: 50 }}
              toastOptions={{
                success: {
                  duration: 3000,
                },
                error: {
                  duration: 5000,
                },
                style: {
                  fontSize: "16px",
                  maxWidth: "500px",
                  padding: "16px 24px",
                  backgroundColor: "var(--color-white)",
                  color: "var(--color-grey-700)",
                },
              }}
            />
          </QueryClientProvider>
        </SideBarOpenProvider>
      </BookmarksProvider>
    </Suspense>
  );
}

export default App;
