import React from 'react';

// import Header from './Header';
import LoadingSpinner from 'components/LoadingSpinner';
import getImage from 'utils/images';

const Layout = (props) => {
  const { loading } = props;
  return (
    <React.Fragment>
      <div
        className='fixed-body'
        style={{
          opacity: 0.8,
          backgroundImage: `url(${getImage('defaultBg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      {loading && (
        <div className='loading'>
          <LoadingSpinner />
        </div>
      )}
      {/* <Header /> */}
      <div className='main-app'>{props.children}</div>
    </React.Fragment>
  );
};

export default Layout;
