import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { list } from '../utils/logService';

const Logs = () => {
  const [urls, setUrls] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await list();
      if (!data.success) {
        console.log('error getting data from db');
      } else {
        setUrls(data.data);
      }
    };
    fetchData();
  });

  return (
    <>
      <h1>LOGG FOR LG RØRLEGGER SERVICE A/S</h1>
      <h3>Sider:</h3>
      {urls &&
        urls.map((url) => (
          <div>
            <Link to={`/logs/${url.id}`}>
              <h5>{url.url}</h5>
            </Link>
          </div>
        ))}
    </>
  );
};
export default Logs;

/*




  

  
*/
