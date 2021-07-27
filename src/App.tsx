import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Axios from "axios";
import fetchApi from "./Redux/action";
import Home from "./Components/Home";

const App = () => {
  const dispatch = useDispatch();

  const fetchAuthorNames = (data: any): void => {
    const authorNames: Array<string> = [];
    data.data.map((e: any) => {
      authorNames.push(e.author);
    });
    dispatch(fetchApi(authorNames));
  };

  useEffect(() => {
    Axios.get("https://jsonmock.hackerrank.com/api/articles").then((res) => {
      fetchAuthorNames(res.data);
      //   dispatch(fetchApi(res.data));
    });
  }, [dispatch]);

  return (
    <>
      <Home />
    </>
  );
};

export default App;
