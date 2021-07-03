import RecommendationsContextProvider from './contexts/RecommendationsContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <>
      <Header />
      <RecommendationsContextProvider>
        <Main />
      </RecommendationsContextProvider>
      <Footer />
    </>
  );
}

export default App;
