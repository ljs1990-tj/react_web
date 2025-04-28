// AppRouter.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import App from './menu/App';
import State from './menu/State';
import Effect from './menu/UseEffect1';
import Review from './menu/Review'
import ProductMain from './menu/ProductMain'
import Ref from './menu/Ref'
import ContextEx from './menu/ContextEx'
import Main from './menu/Main';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        
        <Route path="/app" element={<App />} />
        <Route path="/state" element={<State />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/product" element={<ProductMain />} />
        <Route path="/review" element={<Review />} />
        <Route path="/ref" element={<Ref />} />
        <Route path="/context" element={<ContextEx />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
