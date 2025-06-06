import React from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import WebStoriesPage from './webstory/WebStoriesPage'
import Header from './components/Header'
import Footer from './components/Footer'
import CategoryNewsPage from './pages/CategoryNewsPage'
import ArticleDetailPage from './pages/ArticleDetailPage'
import TagNewsPage from './pages/TagNewsPage'
function App() {
  return (
    <>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/web-stories' element={<WebStoriesPage/>} />
      <Route path='/:slug' element={<CategoryNewsPage/>} />
      <Route path='/article/:slug' element={<ArticleDetailPage/>} />
      <Route path='/tag/:slug' element={<TagNewsPage/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App