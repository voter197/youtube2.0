// файл: frontend/src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import RecommendationList from './components/RecommendationList.jsx';
import VideoPlayer from './components/VideoPlayer.jsx';
import UploadForm from './components/UploadForm.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<RecommendationList />} />
        <Route path="/video/:id" element={<VideoPlayer />} />
        <Route path="/upload" element={<UploadForm />} />
      </Routes>
    </BrowserRouter>
  );
}
Add App.jsx
