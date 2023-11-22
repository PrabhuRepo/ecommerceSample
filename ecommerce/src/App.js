import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Home from './pages/home';
import Search from './pages/search';
import ProductDetail from './components/productDetails';
import Login from './pages/login';

const queryClient = new QueryClient()

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Search />} />
            <Route path='/login' element={<Login />} />
            <Route path='/product/:id' element={<ProductDetail />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;


