import { BrowserRouter } from "react-router-dom";
import "./App.css";
import GateKeeper from "./layout/GateKeeper";
import { IntlProvider } from "react-intl";
import * as langConfig from "./locale";
import { useEffect, useState } from "react";
import moment from "moment";
import _ from "lodash";
import { ConfigProvider } from "antd"; // 추가
import koKR from "antd/lib/locale/ko_KR"; // 추가
const DEFAULT = "ko";
const ANT_CONFIG = { ko: "koKR", ja: "jaJP" };

const getLocale = (langKey) => {
  const language = langKey || DEFAULT;
  const pvName = `${language}`;
  const adName = ANT_CONFIG[language];
  return {
    language: language,
    pvLocale: langConfig[pvName] || langConfig[DEFAULT],
    adLocale: langConfig[adName] || langConfig[adName],
  };
};

function App() {
  const sLanguage = localStorage.getItem("LANGUAGE");
  const curLanguage =
    !_.isEmpty(sLanguage) && ["ko", "ja"].includes(sLanguage)
      ? sLanguage
      : process.env.REACT_APP_LANGUAGE;
  const [locale, setLocale] = useState(getLocale(curLanguage));
  const changeLocale = (language) => {
    if (!language) {
      return;
    }
    setLocale(getLocale(language));
    moment.locale(language);
    localStorage.setItem("LANGUAGE", language);
  };

  // moment 기본 언어 설정
  useEffect(() => {
    moment.locale(curLanguage);
  }, [curLanguage]);

  return (
    <IntlProvider
      locale={locale?.language}
      defaultLocale={DEFAULT}
      messages={{
        ...langConfig[DEFAULT],
        ...locale?.pvLocale,
      }}
      onError={(e) => {}}
    >
      <BrowserRouter>
        <ConfigProvider locale={koKR}>
          <GateKeeper />
        </ConfigProvider>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
