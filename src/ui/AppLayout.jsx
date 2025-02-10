import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen w-screen dark:bg-gray-900 dark:text-white">
      <Header />
      <main className="flex justify-center overflow-y-auto direction-rtl h-full">
        <div className="max-w-4xl w-full p-4 direction-ltr">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
