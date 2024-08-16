import React, { useEffect, useState } from "react";
import Payments from "../components/Payment";

import Style from "../styles/Payment.module.css"
import Nav from "../components/sub component/Nav";



export default function Payment() {


  return (
    <div className={Style.app}>
      <Nav/>
      <h1 > PAYMENT</h1>
      <Payments />
    </div>
  );
}