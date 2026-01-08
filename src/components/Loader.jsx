import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="overlay" />
      <div className="loader-container">
        <div className="socket">
          <div className="gel center-gel">
            <div className="hex-brick h1" />
            <div className="hex-brick h2" />
            <div className="hex-brick h3" />
          </div>
          <div className="gel c1 r1">
            <div className="hex-brick h1" />
            <div className="hex-brick h2" />
            <div className="hex-brick h3" />
          </div>
          <div className="gel c2 r1">
            <div className="hex-brick h1" />
            <div className="hex-brick h2" />
            <div className="hex-brick h3" />
          </div>
        </div>

        {/* ✅ Add your "Please wait..." message here */}
        <p className="loader-text">Please Wait ...</p>
        <p className="loader-subtext">Please do not refresh the page Or try close the tab.</p>
        <p className="loader-subtext">This may take a few seconds.</p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
  }

  .loader-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .socket {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    position: relative;
  }

  .hex-brick {
    background: #000000;
    width: 30px;
    height: 17px;
    position: absolute;
    top: 5px;
    animation-name: fade00;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  .h2 {
    transform: rotate(60deg);
  }

  .h3 {
    transform: rotate(-60deg);
  }

  .gel {
    height: 30px;
    width: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .center-gel {
    margin-left: -15px;
    margin-top: -15px;
    animation: pulse00 2s infinite;
  }

  .c1 {
    margin-left: -47px;
    margin-top: -15px;
    animation: pulse00 2s infinite 0.2s;
  }

  .c2 {
    margin-left: -31px;
    margin-top: -43px;
    animation: pulse00 2s infinite 0.4s;
  }

  .r1 > .hex-brick {
    animation: fade00 2s infinite 0.2s;
  }

  .loader-text {
    margin-top: 20px;
    font-size: 18px;
    color: #333;
    font-weight: bold;
  }

  @keyframes pulse00 {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.01);
    }
  }

  @keyframes fade00 {
    0% {
      background: #00bfff;
    }
    50% {
      background: #1e90ff;
    }
    100% {
      background: #00bfff;
    }
  }
`;

export default Loader;
