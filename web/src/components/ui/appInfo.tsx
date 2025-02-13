// App Version
import packageJson from "./../../../package.json";
// MUI
import PollIcon from "@mui/icons-material/Poll";
import GitHubIcon from "@mui/icons-material/GitHub";
import CopyrightIcon from "@mui/icons-material/Copyright";

// App
import {
  appCommonVoiceURL,
  appGithubURL,
  appLicenseURL,
  ILoaderData,
} from "../../helpers/appHelper";

import "./appInfo.css";
import { PRIMARY_COLOR } from "./theme";
import { useLoaderData } from "react-router";

export const AppInfo = () => {
  const CONF = (useLoaderData() as ILoaderData).analyzerConfig;
  const appDataDate = CONF ? CONF.date : "";
  const appVersion = packageJson.version;

  return (
    <>
      <div
        style={{
          width: "100%",
          // textAlign: "center",
          verticalAlign: "bottom",
          position: "absolute",
          bottom: 40,
          fontSize: "8px",
          color: PRIMARY_COLOR,
        }}
      >
        <div>
          <div className="appinfo-vcenter">
            <>
              <PollIcon />
              {appVersion}
              <br />
              {appDataDate}
            </>
          </div>
          <br />
          <div className="appinfo-vcenter">
            <a
              href={appCommonVoiceURL}
              target="_blank"
              rel="noreferrer"
              className="appinfo-vcenter appinfo-link"
              title="Common Voice"
              aria-label="Common Voice"
            >
              <img
                src="/icons/mars.svg"
                width="24px"
                height="24px"
                alt="Common Voice"
                color={PRIMARY_COLOR}
              />
            </a>
            <a
              href={appGithubURL}
              target="_blank"
              rel="noreferrer"
              className="appinfo-vcenter appinfo-link"
              title="github"
              aria-label="github"
            >
              <GitHubIcon color="primary" />
            </a>
            <a
              href={appLicenseURL}
              target="_blank"
              rel="noreferrer"
              className="appinfo-vcenter appinfo-link"
              title="License"
              aria-label="License"
            >
              <CopyrightIcon color="primary" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
