import logo from './logo.svg';
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import './App.css';
import FeedList from "./feed/FeedList";
import AddPost from "./add-post/AddPost";
import {configureStore} from "@reduxjs/toolkit";
import itemReducer from "./feed/reducers";
import {Provider} from "react-redux";

const store = configureStore({
    reducer: {items: itemReducer}
});

function App() {
  return (
      <Provider store={store}>

          <BrowserRouter>

              <div className="container">
                  <Routes>
                    <Route index element={<FeedList/>}></Route>
                    <Route path="/" element={<FeedList/>}></Route>
                    <Route path="/add-post" element={<AddPost/>}></Route>
                  </Routes>
              </div>

          </BrowserRouter>
      </Provider>
  );
}

export default App;
