import { height } from "@mui/system";
import React from "react";
import { TailSpin } from "react-loader-spinner";
export default function loader() {
  return (
    <div style={{width:"100%" , height:"1000px" , display:"flex" , justifyContent:"center"  , paddingTop:"50px"}}>
      <TailSpin height="100" width="100" color="grey" ariaLabel="loading" />
    </div>
  );
}
