import logo from 'assets/img/logo.png';
import userLogo from 'assets/img/user-logo.png';
import defaultBg from 'assets/img/home-bg-img.jpg';

const images = {
  logo,
  defaultBg,
  homeRight: userLogo,
};
export default function (imageName) {
  return images[imageName];
}
