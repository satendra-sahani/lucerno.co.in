import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp2";

export default function Whatsapp() {
  return (
    <FloatingWhatsApp
      chatboxClassName="chatBox"
      accountName="Experts"
      avatar={"/assets/logo.png"}
      statusMessage="Reply immediately in just 5s"
      darkMode={true}
      phoneNumber="9557649980"
    />
  );
}
