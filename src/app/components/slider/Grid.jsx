'use client';

import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Grid = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/assets/brief-info.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data);
        setData(data);
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, []);

  if (!data || !data.accommodationInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid pt-24 pb-8 mx-auto max-w-screen-2xl">
      <Cards accommodationInfo={data.accommodationInfo} />
    </div>
  );
};

export default Grid;
