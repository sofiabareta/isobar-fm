import Home from './pages/Home';
import { GlobalStyle } from './components/UI/GlobalStyle';
import Band from './pages/Band';
import Header from './components/Header';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultPage from './components/DefaultPage';

function AppRoutes() {
  const [searchTerms, setSearchTerms] = useState("");

  const handleSearch = (term) => {
    setSearchTerms(term)
  }

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<DefaultPage onSearch={handleSearch} />}>
          <Route index element={<Home search={searchTerms}/>}/>
          <Route path="band/:id/*" element={<Band />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
