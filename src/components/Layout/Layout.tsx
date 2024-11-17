import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Footer, Header, Loader, ScrollUpButton } from "../../components";

export const Layout = () => {
  const location = useLocation();
  const showFooter = !["/register", "/login"].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ScrollUpButton />
      </main>

      {showFooter && <Footer />}
    </div>
  );
};
