
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Index from './pages/Index.jsx';
import Services from './pages/Services.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetail from './pages/ProjectDetails.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import './App.css';
import ScroolToTop from './components/ScroolToTop.jsx'
import BlogPage from './pages/Blogs.jsx';
import BlogDetail from './pages/BlogDetails.jsx';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <>
    <ScroolToTop/>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/blogs' element={<BlogPage/>}/>
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};


export default AnimatedRoutes;