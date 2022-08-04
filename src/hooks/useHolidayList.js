import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_HOLIDAYS_API_KEY;

export default function useHolidayList(selectedTimeframe) {
  const [holidayList, setHolidayList] = useState([]);

  useEffect(() => {
    async function getHolidays() {
      let params;
      if (selectedTimeframe === "this_year") {
        params = "year=2022";
      } else {
        params = "year=2022&month=8";
      }
      const url = `https://holidays.abstractapi.com/v1/?api_key=${API_KEY}&country=US&${params}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setHolidayList(data);
    }
    getHolidays();
  }, [selectedTimeframe]);

  return holidayList;
}
