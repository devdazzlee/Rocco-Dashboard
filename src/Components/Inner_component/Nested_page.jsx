import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NestedPage = () => {
  const { state } = useLocation();
  const id_user = state.data;
  const [attendanceData, setAttendanceData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make the API request
    axios.get(`https://comfortable-fox-apron.cyclic.app/staff/detail/${id_user}`)
      .then(response => {
        setAttendanceData(response.data.attendance);
        setError(null);
      })
      .catch(err => {
        setError('Error fetching data');
        console.error(err);
      });
  }, [id_user]); // Include id_user in the dependency array to fetch data when it changes

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Attendance Data</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Type</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Time</th>

          </tr>
        </thead>
        <tbody>
          {attendanceData.map((entry, index) => (
            <tr key={entry._id}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
              <td className="py-2 px-4 border-b text-center">{index + 1}</td>
              <td className="py-2 px-4 border-b text-center">{entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}</td>
              <td className="py-2 px-4 border-b text-center">
      {new Date(entry.time).toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
     })}
</td>

<td className="py-2 px-4 border-b text-center">
  {new Date(entry.time).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'UTC',
  })}
</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NestedPage;
