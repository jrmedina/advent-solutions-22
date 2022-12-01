import React from "react";
import "./App.css";
import { elfCalories } from "../src/dataSets";

const App = () => {
  //ADVENT CALENDAR

  //DAY 1 PT.1 SOLUTION:
  const findTotal = (calSet) => {
    return calSet.reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0);
  };
  const findMost = (elfCalories) => {
    let most = 0;
    elfCalories.forEach((set) => {
      let subset = findTotal(set);
      if (subset > most) {
        most = subset;
      }
    });
    return most;
  };

  //DAY 1 PT.2 SOLUTION:
  const findTop3 = (calSet) => {
    const total = calSet
      .map((set) => findTotal(set))
      .sort((a, b) => b - a)
      .splice(0, 3)
      .reduce((acc, cur) => (acc += cur));

    return total;
  };

  const removeDupes = (array) => {
  const arrayWithDupes = [1, 2, 34, 4, 5, 6, 7, 8, 9, 9, 0, 5, 4, 2];
    //#1
    // const del = [... new Set(array)]
    //#2
    // const del = array.filter((n, i) => array.indexOf(n) === i);
    //#3
    // const del = []
    // arrayWithDupes.forEach(n => !del.includes(n) && del.push(n))
    //#4
    // const del = array.reduce((acc, cur) => {
    //   !acc.includes(cur) && acc.push(cur);
    //   return acc;
    // }, []);
  };
  // removeDupes(arrayWithDupes);


return (
  <main>
    <h1>ANSWER: </h1>
    <h2>{findTop3(elfCalories)}</h2>
  </main>
);


};

export default App;