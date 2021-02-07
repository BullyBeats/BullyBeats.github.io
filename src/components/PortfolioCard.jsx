import React, { useState } from "react";

import getImage from "utils/images";
import { getRepoIconBg } from "utils/helper";
import { GITUSER } from "config.json";

export default function PortfolioCard(props) {
  const { name, description, clone_url } = props.repo;
  const [logoUrl, setLogoUrl] = useState(
    `https://raw.githubusercontent.com/${GITUSER}/${name}/master/logo.png`
  );
  let iconBg = getRepoIconBg(props.repo);
  const onImageError = e => {
    e.target.onerror = null;
    // e.target.src = getImage(iconBg.icon);
    setLogoUrl(getImage(iconBg.icon));
  };
  return (
    <div className="Portfolio_card">
      <div className={`Portfolio_card_logo ${iconBg.bg}`}>
        <img src={logoUrl} onError={onImageError} alt={iconBg.bg} />
      </div>
      <div className="Portfolio_card_info">
        <a href={clone_url} target="_blank" rel="noopener noreferrer">
          <h5>{name}</h5>
        </a>
        <h6>{description}</h6>
      </div>
    </div>
  );
}
