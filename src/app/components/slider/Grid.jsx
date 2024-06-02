'use client';

import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Grid = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/assets/brief-info.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('네트워크 응답 없음');
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
    return <div>로딩 중 입니다....</div>;
  }

  return (
    <div className="grid pt-40 pb-8 mx-auto max-w-screen-full">
      <Cards accommodationInfo={data.accommodationInfo} />
    </div>
  );
};

export default Grid;
