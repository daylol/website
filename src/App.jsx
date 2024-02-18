import React from 'react';
import AppRoutes from './components/App/AppRoutes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className="app">
    <Header />
    <main>
      <AppRoutes />
    </main>
    <Footer />
  </div>
);

export default App;
