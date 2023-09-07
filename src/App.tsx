import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import { Suspense, lazy } from "react";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Spinner from "./ui/Spinner";

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
          <Route path='/car/:carId' element={<CarDetails />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/account' element={<Account />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
