import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_HOLIDAYS_API_KEY;

export default function HolidayList() {
  const [timespan, setTimespan] = useState("This Month");
  const [holidays, setHolidays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getHolidays() {
      setIsLoading(true);
      const url = `https://holidays.abstractapi.com/v1/?api_key=${API_KEY}&country=US`;
      const response = await fetch(url);
      const data = await response.json();
      console.log("data is: ", data);
      setHolidays(data);
      setIsLoading(false);
    }
    getHolidays();
  }, []);

  return (
    <div>
      <div>HolidayList</div>
      <button onClick={() => setTimespan("This Month")}>This Month</button>
      <button onClick={() => setTimespan("This Year")}>This Year</button>
      <div style={{ marginBottom: 40 }}>{timespan} is selected.</div>
      {!isLoading ? (
        <div>
          {holidays.length > 0 ? (
            holidays.map((holiday) => (
              <div>
                <div>{holiday.name}</div>
              </div>
            ))
          ) : (
            <div>No holidays found.</div>
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
