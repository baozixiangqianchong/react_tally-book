import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { NavBar, Icon } from "zarm";
import { ArrowLeft } from "@react-vant/icons";

import s from "./style.module.less";

const Header = ({ title = "" }) => {
  const navigate = useNavigate();

  return (
    <div className={s.headerWarp}>
      <div className={s.block}>
        <NavBar
          className={s.header}
          left={
            <ArrowLeft onClick={() => navigate(-1)} />
          }
          title={title}
        />
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string, // 标题
};

export default Header;
