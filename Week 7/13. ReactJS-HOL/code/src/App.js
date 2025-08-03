import React from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

import { books } from './data/books';
import { blogs } from './data/blogs';
import { courses } from './data/courses';

import './App.css';

function App() {
  return (
    <div className="main-container">
      <BookDetails books={books} />
      <BlogDetails blogs={blogs} />
      <CourseDetails courses={courses} />
    </div>
  );
}

export default App;
