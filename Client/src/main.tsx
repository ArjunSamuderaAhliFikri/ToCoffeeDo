import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/DashboardPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./pages/TaskPage.tsx";
import TaskContextLayout from "./components/layout/TaskContextLayout.tsx";
import RecentTaskContextLayout from "./components/layout/RecentTaskContextLayout.tsx";
import SidebarContextLayout from "./components/layout/showSidebarContextLayout.tsx";
import AppShell from "./components/layout/AppShell/index.tsx";
import TodoPage from "./pages/TodoPage.tsx";
import DetailTaskPage from "./pages/DetailTaskPage.tsx";
import NotLayoutShell from "./components/layout/NotLayoutShell.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/home", element: <div>hello home!</div> },
  { path: "/task/:id", element: <TaskPage /> },
  { path: "/todos", element: <TodoPage /> },
  {
    path: "/todos/:id",
    element: <DetailTaskPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TaskContextLayout>
      <RecentTaskContextLayout>
        <SidebarContextLayout>
          <NotLayoutShell>
            <AppShell>
              <RouterProvider router={router}></RouterProvider>
            </AppShell>
          </NotLayoutShell>
        </SidebarContextLayout>
      </RecentTaskContextLayout>
    </TaskContextLayout>
  </React.StrictMode>
);
