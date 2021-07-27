import React from "react";
import { useSelector } from "react-redux";
import Input from "./Input";

const Home = (): React.ReactElement => {
  const authorNames = useSelector((state: any) => state.authors.authorNames);
  if (authorNames) {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {authorNames.map((e: string, index: number) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "10px",
                }}
              >
                <li key={index}>{e}</li>
              </div>
            );
          })}
        </div>
        <Input authorNames={authorNames} />
      </>
    );
  }
  return <>Loading...</>;
};

export default Home;
