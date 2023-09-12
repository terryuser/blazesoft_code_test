import "./App.css";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";

import store from "@src/redux/store";

import { Main, AddBook, EditBook, NoPage } from "@src/routeDOM";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="add" element={<AddBook />} />
        <Route path="edit/:bookId" element={<EditBook />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
