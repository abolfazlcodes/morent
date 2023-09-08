import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import { Suspense, lazy } from "react";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Spinner from "./ui/Spinner";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("./pages/HomePage"));
const Settings = lazy(() => import("./pages/Settings"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const Account = lazy(() => import("./pages/Account"));
const Cars = lazy(() => import("./pages/Cars"));
const CarDetails = lazy(() => import("./pages/CarDetails"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyles />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/cars' element={<Cars />} />
          <Route path='/cars/:carId' element={<CarDetails />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/account' element={<Account />} />
        </Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

      <Toaster
        position='top-center'
        reverseOrder={true}
        gutter={12}
        containerStyle={{
          margin: "8px",
        }}
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
            padding: "16px",
            backgroundColor: "var(--color-white)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </Suspense>
  );
}

export default App;
