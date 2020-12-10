import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import { list, topTen } from '../utils/logService';
import { MsgList } from '../utils/messageService';

const Logs = () => {
  const [urls, setUrls] = useState(null);
  const [topTenUrl, setTopTenUrl] = useState(null);
  const [msg, setMsg] = useState(null);
  console.log(topTenUrl);
  console.log(urls);
  console.log(msg);

  const getList = async () => {
    const { data } = await list();
    if (!data.success) {
      console.log('error getting all-data from db');
    } else {
      setUrls(data.data);
    }
  };

  const getTopTen = async () => {
    const { data } = await topTen();
    if (!data.success) {
      console.log('error getting topTen-data from db');
    } else {
      setTopTenUrl(data.data.data);
    }
  };

  const getMessages = async () => {
    const { data } = await MsgList();
    if (!data.success) {
      console.log('error getting msg-data from db');
    } else {
      setMsg(data.data);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      getList();
      getTopTen();
      getMessages();
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>LOGG FOR LG RØRLEGGER SERVICE A/S</h1>
      <h3>Topp 10 Views</h3>
      {topTenUrl &&
        topTenUrl?.map((url) => (
          <div>
            <Link to={`/logs/${url.id}`}>
              <h5>
                Views: {url.views} - {url.url}
              </h5>
            </Link>
          </div>
        ))}
      {topTenUrl && (
        <CSVLink
          // header={headers}
          data={JSON.stringify(
            topTenUrl.map((x) => ({ url: x.url, views: x.views, time: x.time }))
          )}
          filename="top10logdata.csv"
          enclosingCharacter={` `}
          replace={(' ', '"')}
        >
          Download CSV-file for TOP10
        </CSVLink>
      )}
      <h3>Alle Sider</h3>
      {urls &&
        urls?.map((url) => (
          <div>
            <Link to={`/logs/${url.id}`}>
              <h5>{url.url}</h5>
            </Link>
          </div>
        ))}
      {urls && (
        <CSVLink
          // header={headers}
          // data={newData}
          data={JSON.stringify(
            urls.map((x) => ({ url: x.url, views: x.views, time: x.time }))
          )}
          filename="logdata.csv"
          enclosingCharacter={` `}
          replace={(' ', '"')}
        >
          Download CSV-file for All
        </CSVLink>
      )}
      <h1>Meldinger fra brukerene</h1>
      {msg &&
        msg?.map((messages) => (
          <div>
            <h5>Navn: {messages?.author}</h5>
            <h5>Epost: {messages?.email}</h5>
            <h5>Melding: {messages?.message}</h5>
            <h5>
              ---------------------------------------------------------------------------------------------
            </h5>
          </div>
        ))}
    </>
  );
};
export default Logs;
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
