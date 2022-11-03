import "./App.css";
import Posts from "./Components/Posts";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import PostsReact from "./Components/PostsReact";
import PostPaginator from "./Components/PostPaginator";
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
          </Routes>
          <ReactQueryDevtools />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
