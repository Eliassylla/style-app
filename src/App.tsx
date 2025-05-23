import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./screens/HomePage/HomePage";
import { SearchPage } from "./screens/SearchPage/SearchPage";
import { BookingPage } from "./screens/BookingPage/BookingPage";
import { ConfirmationPage } from "./screens/ConfirmationPage/ConfirmationPage";
import { AppointmentsPage } from "./screens/AppointmentsPage/AppointmentsPage";
import { Chat } from "./screens/Chat/Chat";
import { Profile } from "./screens/Profile/Profile";
import { User } from "./screens/User";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/booking/:salonId" element={<BookingPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
