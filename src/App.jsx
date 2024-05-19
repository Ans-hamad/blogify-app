import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import authService from "./appwrite/auth";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const { status } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!status) {
      authService.getCurrentUser().then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      });
    }

    setLoading(false);
  }, []);

  return !loading ? (
    <>
      <Header />
      <main className="py-6 min-h-[498px] ">
        <Outlet />
      </main>
      <Footer />
    </>
  ) : null;
}

export default App;
