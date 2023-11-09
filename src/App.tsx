import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/routes";
import BaseUrl from "./components/base-url/baseUrl";
import ScrollToTop from "./components/scroll-to-top/scrollToTop";
import LanguageController from './components/language-controller/languageController';
import ContextWrapper from './components/context-wrapper/contextWrapper';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

function App() {

  return (
    <Suspense fallback=''>
      <ContextWrapper>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <LanguageController />
            <ScrollToTop />
            <Routes />
            <BaseUrl />
          </QueryClientProvider>
        </BrowserRouter>
      </ContextWrapper>
    </Suspense>
  );
}
export default App;