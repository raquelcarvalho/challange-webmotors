import { useState, useEffect } from "react";
const fechData = (url, options) => {
  const path = "http://desafioonline.webmotors.com.br/api/OnlineChallenge";

  setLoading(true);
      try {
        const res = await fetch(path + url, options);
        const json = await res.json();
        if (!signal.aborted) {
          return json
          setLoading(false);
        }
      } catch (e) {
        if (!signal.aborted) {
          return e;
        }
      }
};
export default useFetch;
