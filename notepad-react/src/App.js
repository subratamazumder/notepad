import React from "react";
import "./App.css";
import Footer from "./components/footer";
import CookieNotification from "./components/cookie-notification";
import NotePad from "./components/note-pad";
function App() {
  return (
    <div>
      <NotePad></NotePad>
      <Footer></Footer>
      <CookieNotification></CookieNotification>
    </div>
  );
}

export default App;
