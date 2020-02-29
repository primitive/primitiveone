import React from "react";
import { connect } from "frontity";
import Link from "./link";

const Frame = ({ link, className, children }) => {

  if (!link) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <div className={className}>
      <Link link={link}>
        {children}
      </Link>
    </div>
  );

};

export default connect(Frame);