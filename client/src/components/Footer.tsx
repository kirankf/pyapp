import GithubIcon from '../assets/github.svg';
import GmailIcon from '../assets/gmail.svg';
import LinkedInIcon from '../assets/linkedin.svg';

const Footer = () => {
  const gmailLink = 'mailto:info@adex.com';
  const githubLink = 'https://github.com/adexltd';
  const linkedinLink =
    'https://www.linkedin.com/company/adexltd';
  const websiteLink = "https://adex.ltd/"
  return (
    <div className="flex flex-col justify-center mt-auto">
      <div className="border-t-2 mb-2 border-gray-200 py-3 mt-12">
        <p className="text-center">
          <a
            href={websiteLink}
            target="blank"
            className="text-green-600 font-semibold"
          >
            Adex International
          </a>
          <span className="ml-2">
            | All rights reserved, {new Date().getFullYear()}
          </span>
        </p>
        <div className="flex gap-x-5 justify-center mt-2">
          <a href={gmailLink} target="blank">
            <img src={GmailIcon} alt="" className="w-5 md:w-6" />
          </a>
          |
          <a href={githubLink} target="blank">
            <img src={GithubIcon} alt="" className="w-5 md:w-6" />
          </a>
          |
          <a href={linkedinLink} target="blank">
            <img src={LinkedInIcon} alt="" className="w-5 md:w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
