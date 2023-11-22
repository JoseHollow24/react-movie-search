import React from 'react'
import ReactDOM from 'react-dom/client'
import { MoviesSearch } from './components/MoviesSearch'

import './styles/movies-search.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < MoviesSearch />
  </React.StrictMode>,
)
