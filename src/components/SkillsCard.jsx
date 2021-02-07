import React from "react";
import getImage from "utils/images";

const skillsImageMap = {
  JavaScript: "js_logo_icon",
  React: "reactIcon",
  Redux: "redux_icon",
  "Redux-saga": "redux_saga_icon",
  ReactNative: "react_native_icon",
  "D3.JS": "D3js_icon",
  "Storybook.JS": "storybookjs_icon",
  HTML: "html_icon",
  CSS: "css_icon",
  SCSS: "scss_icon",
  "React-Bootstrap": "react_bootstrap_icon",
  MongoDB: "mongodb_icon",
  Git: "git_icon",
  Github: "github_icon",
  "Visual Studio": "visual_Studio_icon",
  Linux: "linux_icon",
  "Mac OS": "mac_os_icon",
  Zepline: "zeplin_icon",
  "Socket.IO": "socket_icon",
  "Redux-form": "redux_form_icon"
};

export default function SkillsCard(props) {
  return (
    <div className="SkillsCard center cardAnimation">
      {skillsImageMap[props.skill] ? (
        <img
          src={getImage(skillsImageMap[props.skill])}
          className="SkillsCard_img"
          alt=""
        />
      ) : (
        <div className="SkillsCard_title center">{props.skill}</div>
      )}
      {skillsImageMap[props.skill] && (
        <div className="SkillsCard_desc">{props.skill}</div>
      )}
    </div>
  );
}
