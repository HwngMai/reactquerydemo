import "./App.css";
import Posts from "./Components/Posts";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
function App() {
  const client = new QueryClient();
  return (
    <div className='App'>
      <QueryClientProvider client={client}>
        <Posts />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
