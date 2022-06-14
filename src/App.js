/* eslint-disable react-hooks/exhaustive-deps */
import {Route, Routes} from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainMenu from "./components/pages/MainMenu/MainMenu";
import NavBar from "./components/views/NavBar/NavBar";
import { fetchTables } from './redux/tableRedux';
import EditTablePage from './components/pages/EditTablePage/EditTablePage';
import Footer from './components/views/Footer/Footer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => fetchTables(dispatch), []);

  return (
    <main>
      <NavBar />
      <Routes>
          <Route path='/' element={<MainMenu />} />
          <Route path='/table/:id' element={<EditTablePage />}></Route>
        </Routes>
      <Footer /> 
    </main>
  );
}

export default App;
