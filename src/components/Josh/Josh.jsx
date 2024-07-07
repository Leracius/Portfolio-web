import React, { useEffect, useState } from "react";
import { JoshMessage, MessageBubble, TalkJosh } from "./JoshStyled";

const Josh = ({ message, active, children }) => {
  const [isVisible, setIsVisible] = useState(active);

  return (
    <JoshMessage>
      {isVisible && (
        <>
          <MessageBubble>
            {message}
            {children}
          </MessageBubble>

          <TalkJosh></TalkJosh>
        </>
      )}
      {!isVisible && <h1></h1>}
    </JoshMessage>
  );
};

export default Josh;
