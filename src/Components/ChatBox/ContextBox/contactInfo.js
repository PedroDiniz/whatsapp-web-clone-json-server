import React from "react";
import { Div } from "glamorous";

import { Header } from "./header";
import { ContactInfoResults } from "./contactInfoResults";

export const ContactInfo = ({
  handleCancelClick,
  handleDeleteChatClick,
  handleReportSpamClick,
  handleBlockContactClick,
  picturePath,
  name
}) => {
  return (
    <Div
      css={{
        height: "100vh",
        display: "grid",
        gridTemplateRows: "10% 90%",
        borderLeft: "1px solid rgba(0, 0, 0, 0.05)",
        background: "#FFF"
      }}
    >
      <Header text="Contact Info" handleCancelClick={handleCancelClick} />
      <ContactInfoResults
        picturePath={picturePath}
        name={name}
        handleReportSpamClick={handleReportSpamClick}
        handleDeleteChatClick={handleDeleteChatClick}
        handleBlockContactClick={handleBlockContactClick}
      />
    </Div>
  );
};
