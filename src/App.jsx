import { BrowserRouter } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";

import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

function App() {
  return (
    <BrowserRouter>
      {localStorage.jwt === undefined ? <></> : <Header />}
      <LoadScript google_maps_api_key={import.meta.env.VITE_GOOGLE_API_KEY}>
        <Content />
      </LoadScript>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
