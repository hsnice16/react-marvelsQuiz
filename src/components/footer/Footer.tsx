import "./footer.css";
import React from "react";
import classNames from "classnames";
import { FooterSocialLinks } from "data";

export const Footer = () => {
  return (
    <footer className="grid footer-home justify-c-ctr px-4 py-1">
      <div className="text-center">
        <div className="fs-1p7 fw-bold my-1 text-slate-800">
          Connect with me
        </div>

        <ul className="flex">
          {FooterSocialLinks.map(({ _id, linkFor, url }) => (
            <li key={_id} className="mx-1 translate-y">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="fs-2 link"
              >
                <i className={classNames("fab", `fa-${linkFor}`)}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
