import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../views";
import LoginPage from "../views/Auth/Login";
import ProtectedRoute from "../views/Auth/ProtectedRoute";
import ErrorHandler from "../components/errors/ErrorRouteHandler";
import PageNotFound from "../views/PageNotFound";
import RootLayout from "../views/Layout";
import RegisterPage from "../views/Auth/Register";
import ResetPasswordPage from "../views/Auth/ResetPassword";
import ProfilePage from "../views/settings/Profile";
import CoursesPage from "../views/website/Courses";
import PlayVideo from "../views/website/renders/PlayVideo";

const routers = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="tester" element={<PlayVideo />} />
        <Route
          path="login"
          element={
            <ProtectedRoute isAllowed redircetPath="/">
              <LoginPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="register"
          element={
            <ProtectedRoute isAllowed redircetPath="/">
              <RegisterPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="resetpassword"
          element={
            <ProtectedRoute isAllowed redircetPath="/">
              <ResetPasswordPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedRoute isAllowed redircetPath="/">
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="courses"
          element={
            <ProtectedRoute isAllowed redircetPath="/">
              <CoursesPage />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Learn Layout */}
      {/* <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<QuickStartPage />} />
        <Route path="thinking-in-react" element={<ThinkingInReactPage />} />
        <Route path="installation" element={<InstallationPage />} />
      </Route> */}

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default routers;
