import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
// Lazy load the pages
const Home = lazy(() => import('./Screens/Home'));
const News =lazy(()=>import('./Screens/News'));
const FindLawyers =lazy(()=>import('./Screens/FindLawyers'));
const Connections = lazy(()=>import("./Screens/Connections"));
const Chats = lazy(()=>import("./Screens/Chats"));

const App = () => {
  return (
   <Router>
    <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path ="/find-lawyers" element={<FindLawyers />} />
      <Route path ="/connections" element={<Connections />} />
      <Route path ="/chats" element={<Chats />} />
      </Routes>
      </Suspense>
      </Router>
  )
}

export default App