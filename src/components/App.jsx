import s from './App.module.css'
import Header from "./Header";
import Footer from "./Footer";

import { Suspense, useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshCurrentUser } from "../redux/auth/auth-operations";
import { getIsLoading } from "../redux/auth/auth-selectors";

const PhonebookPage = lazy(() =>
  import('../views/PhonebookPage')
);
const HomePage = lazy(() => 
  import('../views/HomePage')
);
const SignInPage = lazy(() =>
  import('../views/SignInPage')
);

const SignUpPage = lazy(() =>
  import('../views/SignUpPage')
);

const App = () => { 
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    !isLoading && (
      <div className={s.wrapper}>
        <Header className={s.header}/>
        <main className={(s.main, s.phonebookSection)}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path="/" element={<HomePage />} />;
              <Route path="/phonebook" element={<PhonebookPage />} />;
              <Route path="/signIn" element={<SignInPage />} />;
              <Route path="/signUp" element={<SignUpPage/>} />;
            </Routes>
          </Suspense>
        </main>
        <Footer className={s.footer}/>
      </div>
    )
  )
}
export default App