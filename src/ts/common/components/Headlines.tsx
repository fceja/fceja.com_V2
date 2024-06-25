import React, { useEffect, useState } from "react";

import "@scss/common/components/Headlines.scss";
import Loading from "@common/components/Loading";

type ResponseData = {
  statusCode: number;
  body: {
    data: [
      {
        title: string;
        source: string;
        url: string;
      },
    ];
  };
};

const Headlines = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [headlines, setHeadlines] = useState<{ source: string; url: string }[]>([]);
  const [responseData, setResponseData] = useState<ResponseData | null>(null);

  useEffect(() => {
    // if local data exists, retrieve - otherwise fetch
    const storedData = sessionStorage.getItem("responseData");
    if (storedData) {
      setResponseData(JSON.parse(storedData));
      setIsLoading(false);

    } else {
      fetchData()
    }
  }, [])

  useEffect(() => {
    if (!responseData || responseData.statusCode != 200) return;
    responseData.body.data.forEach((article) => {
      setHeadlines((headlines) => [
        ...headlines,
        {
          source: `${article.title} - ${article.source}`,
          url: article.url,
        },
      ]);
    });
  }, [responseData]);


  const fetchData = async () => {
    try {
      const baseUrl = import.meta.env.VITE_APP_AWS_API_URL;
      const apiUrl = `${baseUrl}/news/top`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      setResponseData(data);
      sessionStorage.setItem("responseData", JSON.stringify(data));

    } catch (error) {
      console.error(error);

    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && responseData && headlines &&
        <div className="headlines-container">
          <ul className="link-list">
            {headlines.map((elem, index) => {
              return (
                <React.Fragment key={index}>
                  <li className="headline-li">
                    <a className="headline-link" href={`${elem.url}`} target="_blank" rel="noreferrer">{`${elem.source}`}</a>
                  </li>
                </React.Fragment>
              )
            })}
          </ul>
        </div>
      }
    </>
  );
};

export default Headlines;