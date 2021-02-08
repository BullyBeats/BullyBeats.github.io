import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Badge } from 'reactstrap';

import Iframe from 'components/Iframe';
import APICaller from 'utils/APICaller';

import Mail from 'assets/svg/Mail';
import Phone from 'assets/svg/Phone';
import Facebok from 'assets/svg/Facebok';
import Youtube from 'assets/svg/Youtube';
import Instagram from 'assets/svg/Instagram';
import Soundcloud from 'assets/svg/Soundcloud';

import {
  DISPLAYNAME,
  EMAIL,
  PHONE,
  YOUTUBE,
  FACEBOK,
  PROFILEPIC,
  SOUNCLOUD,
  INSTAGRAM,
  RESUMELINK,
} from 'config.json';

const Home = (props) => {
  const [tracks, setTracks] = useState([]);
  let { history } = props;
  useEffect(() => {
    APICaller({
      reqUrl: 'https://601fd327e3e55e0017f479ad.mockapi.io/links',
    }).then((response) => {
      setTracks(response.data);
      const loadingdiv = document.getElementById('pt-loader-container');
      loadingdiv && loadingdiv.parentNode.removeChild(loadingdiv);
      if (history.location.search.includes('portfolio')) {
        window.scrollTo(0, window.innerHeight);
      }
    });
  }, [history]);
  const onClickPortfolio = () => {
    window.scrollTo(0, window.innerHeight);
    history.push('/?portfolio');
  };
  return (
    <div className='Home'>
      <Container fluid='lg' className='Home_page first'>
        <Row className='Home_row'>
          <Col lg={7} className='Home_banner'>
            <Badge color='info' pill className='hello'>
              <h4 className='marginPadding'>Hello I'm</h4>
            </Badge>

            <div className='name'>{DISPLAYNAME}</div>
            <div className='designation'>Music Producer</div>

            <div style={{ display: 'flex' }}>
              <a
                href={RESUMELINK}
                target='_blank'
                rel='noopener noreferrer'
                className='designation'
                style={{ marginRight: 16, color: 'white', background: 'navy' }}
              >
                Resume
              </a>
              <div
                onClick={onClickPortfolio}
                className='designation'
                style={{
                  color: 'white',
                  background: 'navy',
                  cursor: 'pointer',
                }}
              >
                Portfolio
              </div>
            </div>

            <div className='Home_banner_contact'>
              <Mail className='Home_banner_icon' />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>

            <div className='Home_banner_contact'>
              <Phone className='Home_banner_icon' />
              <a href={`callto:${PHONE}`}>{PHONE}</a>
            </div>

            <div className='Home_banner_social'>
              {[
                {
                  componet: Youtube,
                  url: YOUTUBE,
                },
                {
                  componet: Facebok,
                  url: FACEBOK,
                },
                {
                  componet: Instagram,
                  url: INSTAGRAM,
                },
                {
                  componet: Soundcloud,
                  url: SOUNCLOUD,
                },
              ].map((row, index) => {
                const Icon = row.componet;
                return (
                  <a
                    key={`social_${index}`}
                    href={row.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Icon className='Home_banner_icon' />
                  </a>
                );
              })}
            </div>
          </Col>
          <Col lg={5} className='Home_logo'>
            <div className='img-border'>
              <img src={PROFILEPIC} alt='' className='img-fluid' />
            </div>
          </Col>
        </Row>
      </Container>
      {tracks.map((track, i) => {
        return (
          <div
            key={`track_${i}`}
            className={i % 2 === 0 ? 'first_theme' : 'second_theme'}
          >
            <Container className='Home_track'>
              <div className='track_text'>
                {track?.title && (
                  <h2 className='track_title'>{track?.title}</h2>
                )}
                {track?.description && (
                  <h4 className='track_description'>{track?.description}</h4>
                )}
              </div>
              <Iframe src={track?.link} height={track?.height || 300} />
            </Container>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
