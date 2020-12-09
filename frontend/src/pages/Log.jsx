import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import { get } from '../utils/logService';

const Log = () => {
  const [url, setUrl] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await get(id);
      if (!data.success) {
        console.log('error getting data from db');
      } else {
        setUrl(data.data);
      }
    };
    fetchData();
  });

  return (
    <div>
      {url && (
        <div>
          <h1>Stats for {url.url}</h1>
          <h5>Total viewed: {url.views} times</h5>
          <h5>Total time on site: {url.time} sec</h5>
          <h2>User stats on page</h2>
          {url.users &&
            url.users.map((user) => (
              <div>
                <h3>UserId: {user.user}</h3>
                <h5>Times visited: {user.views}</h5>
              </div>
            ))}
          <CSVLink
            data={JSON.stringify({
              url: url.url,
              views: url.view,
              time: url.time,
            })}
            filename={`${url.url}_logdata.csv`}
            enclosingCharacter={` `}
            replace={(' ', '"')}
          >
            Download CSV-file for this url
          </CSVLink>
        </div>
      )}
    </div>
  );
};

export default Log;

/*
{url &&
        url.map((stats) => (
          <div>
            <h3>{stats.url}</h3>
            <h5>Total viewed: {stats.views} times</h5>
            <h5>Total time on site: {stats.time} in sec</h5>
          </div>
        ))}
*/
