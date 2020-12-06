import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
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

  const headers = [
    // { label: 'ID', key: '_id' },
    { label: 'URL', key: 'url' },
    { label: 'Views', key: 'views' },
    { label: 'Time', key: 'time' },
    // { label: 'ID', key: 'id' },
  ];

  /*
  const newData = [
    ['URL', 'VIEWS', 'TIME'],
    urls && urls.map((url) => [url.url, url.views, url.time]),
  ];
  */

  // console.log(...newData);

  const newData = JSON.stringify(urls);
  // console.log(newData);
  // const newData = { ...urls };
  // console.log(moreNewData);

  /*
  const csvReport = {
    data: newData,
    headers,
    filename: 'LoggRapport.csv',
  };
  */

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
      <CSVLink
        header={headers}
        data={newData}
        // data={urls.map((x) => ({ url: x.url, views: x.views, time: x.time }))}
        filename="logdata.csv"
        enclosingCharacter={` `}
        replace={(' ', '"')}
      >
        Download CSV-file
      </CSVLink>
    </>
  );
};
export default Logs;

/*
<CSVLink data={urls} enclosingCharacter={`'`}>
        Download CSV-file
      </CSVLink>

      urls.map((x) => ({ url: x.url, views: x.views, time: x.time }))
*/

/*
const exportCsv = () => {
    const csvRow = [];
    const A = [['_id', 'url', 'time', 'views', 'id']];
    const re = urls;

    for (let i = 0; i < re.length; i + 1) {
      A.push([i, re[i]._id, re[i].url, re[i].time, re[i].views, re[i].id]);
    }
    for (let i = 0; i < A.length; i + 1) {
      csvRow.push(A[i].join(','));
    }
    const csvString = csvRow.join('%AO');
    const a = document.createElementNS('a');
    a.href = `data.attachment/csv${csvString}`;
    a.target = '_Blank';
    a.download = 'data.csv';
    document.body.appendChild(a);
    a.click();
  };

  <button
        type="button"
        onClick={() => {
          exportCsv();
        }}
      >
        Export CSV
      </button>

  */
