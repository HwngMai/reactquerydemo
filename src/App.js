import "./App.css";
import Posts from "./Components/Posts";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import PostsReact from "./Components/PostsReact";
import PostPaginator from "./Components/PostPaginator";
import Editing from "./Components/Editing";
import EditingCustomHook from "./Components/EditingCustomHook";
import GetQueryClient from "./Components/GetQueryClient";
function App() {
  const client = new QueryClient();
  return (
    <div className='App'>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/react-query' exact element={<Posts />} />
            <Route path='/react-useEffect' exact element={<PostsReact />} />
            <Route
              path='/react-useEffect-Pagin'
              exact
              element={<PostPaginator />}
            />
            <Route path='/react-query-edit' exact element={<Editing />} />{" "}
            <Route path='/react-query-edit' exact element={<Editing />} />
            <Route
              path='/react-query-edit-customhook'
              exact
              element={<EditingCustomHook />}
            />
            <Route
              path='/react-query-getqueryclient'
              exact
              element={<GetQueryClient />}
            />
          </Routes>
          <ReactQueryDevtools />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
