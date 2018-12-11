import React, { Component } from "react";
import { Div, Input } from "glamorous";

import MdInsertEmoticon from "react-icons/lib/md/insert-emoticon";

export class ChatMessageInput extends Component {
  render() {
    const { inputValue, handleInputChange, handleInputKeyDown } = this.props;

    return (
      <Div
        css={{
          textAlign: "center"
        }}
      >
        <Input
          css={{
            width: "95%",
            padding: "4px 10px",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            height: "40px",
            color: "#7f7f7f",
            fontSize: "1em",
            fontWeight: "500",
            letterSpacing: "0.5px",
            outline: "none",
            ":focus": {
              color: "#545454"
            }
          }}
          type="text"
          placeholder="Type a message"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        />
      </Div>
    );
  }
}
