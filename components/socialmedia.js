import React from 'react';
import Link from 'next/link';

import Image from 'next/image';

import github from "../public/assets/icon/github.png"
import twitter from "../public/assets/icon/twitter.png"
import linkdin from "../public/assets/icon/linkdin.png"
const SocialMedia = () => {
  return (
    <div className="flex flex-row   bg-slate-400 justify-center">
      <div className='social flex flex-row justify-around p-1'>
      <Link    href="https://github.com/nilankar19" target="_blank" rel="noopener noreferrer">

          <Image
          src={github}
          width={32}
          height={32}
          alt="github"
          className="social-iCon "
          />

      </Link>
      <Link  href="https://twitter.com/Nilankar_" target="_blank" rel="noopener noreferrer">

      <Image
          src={twitter}
          width={32}
          height={32}
          alt="twitter"
          className="social-iCon "
          />

      </Link>
      <Link href="https://www.linkedin.com/in/nilankar-b1a072286/overlay/contact-info/" target="_blank" rel="noopener noreferrer">

      <Image
          src={linkdin}
          width={32}
          height={32}
          alt="linkdin"
          className="social-iCon"
          />

      </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
