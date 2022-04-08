import "./footer.css";
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
                className="fs-2 link"
                target="_blank"
                rel="noreferrer"
              >
                <i className={`fab fa-${linkFor}`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
