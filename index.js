import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const steps = 50;

const blinkCursor = keyframes`
  from {
    border-color: transparent;
  }
  to {
    border-color: inherit;
  }
`;

const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const LineContainer = styled.div`
  display: inline-block;
`;

const Line = styled.p`
  display: inline-block;
  color: ${(props) => props.color};
  border-right: 2px solid ${(props) => props.color};
  animation: ${typing} ${(props) => props.typingTime}s steps(${steps}) normal,
    ${blinkCursor} ${(props) => props.blinkTime}s steps(${steps}) infinite
      normal;
  overflow: hidden;
  white-space: nowrap;
`;

function Typist({ text, color, blinkTime, typingTime }) {
  return (
    <LineContainer>
      <Line color={color} blinkTime={blinkTime} typingTime={typingTime}>
        {text}
      </Line>
    </LineContainer>
  );
}

Typist.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  blinkTime: PropTypes.number,
  typingTime: PropTypes.number,
};

Typist.defaultProps = {
  color: "#868686",
  blinkTime: 1,
  typingTime: 4,
};

export default Typist;
