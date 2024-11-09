import { Routes } from "react-router-dom";
import "./App.css";
import CommentsList from "./pages/comments";
import RecipeList from "./pages/recipes";
import { Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import RecipeDetailsPage from "./pages/recipe-details";
import NotFoundPage from "./pages/not-found";
import Layout from "./components/layout";
import { useRoutes } from "react-router-dom";
import ReactHookFormExamplePage from "./pages/react-hook-form-example";
import Hooks from "./pages/hooks";
import UseMemoExample from "./pages/use-memo-example";
import UseCallbackExample from "./pages/use-callback-example";
import ReactQuery from "./pages/react-query";

function CustomRoutes() {
  const element = useRoutes([
    {
      path: "/home",
      element: <Layout />,
      children: [
        {
          path: "recipe-list",
          element: <RecipeList />,
        },
        { path: "comments-list", element: <CommentsList /> },
        { path: "recipe-list/:id", element: <RecipeDetailsPage /> },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
    {
      path: "/react-hook-form",
      element: <ReactHookFormExamplePage />,
    },
    {
      path: "/hooks",
      element: <Hooks />,
    },
    {
      path: "/memo",
      element: <UseMemoExample />,
    },
    {
      path: "/callback",
      element: <UseCallbackExample />,
    },
    {
      path: "/react-query-demo",
      element: <ReactQuery />,
    },
  ]);
  return element;
}

function App() {
  const navigate = useNavigate();

  return (
    <div>
      {/* <h1>React Routing, Custom Hooks and more</h1>
      <div>
        <Link to={"/home/recipe-list"}>
          Alternative way of navigating to recipe list page
        </Link>
      </div>
      <button
        onClick={() => navigate("/home/recipe-list")}
        style={{ background: "white", color: "black", marginRight: "10px" }}
      >
        Navigate to Recipe List Page
      </button>
      <button
        onClick={() => navigate("/home/comments-list")}
        style={{ background: "white", color: "black" }}
      >
        Navigate to Comments List Page
      </button> */}
      {/* <Routes>
        <Route path="/home" element={<Layout />}>
          <Route path="recipe-list" element={<RecipeList />} />
          <Route path="comments-list" element={<CommentsList />} />
          <Route path="recipe-list/:id" element={<RecipeDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes> */}
      <CustomRoutes />
    </div>
  );
}

export default App;
