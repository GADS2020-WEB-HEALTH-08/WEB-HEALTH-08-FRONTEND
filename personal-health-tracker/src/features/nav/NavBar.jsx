import React, { useEffect, useState } from "react";
import { Container, Input, Menu, Select } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { setActiveNavItem } from "../../app/redux/common/common.slice";

const NavBar = ({ setActiveNavItem, activeItem }) => {
  const [locationOptions, setLocationOptions] = useState([]);
  const handleItemClick = (e, { name }) => setActiveNavItem(name);

  useEffect(() => {
    // activeItem ? setActiveItem(activeItem) : setActiveItem('home');
    setLocationOptions([
      { key: "lg", value: "lg", text: "Lagos" },
      { key: "rv", value: "rv", text: "Rivers" },
      { key: "ab", value: "ab", text: "Abuja" },
      { key: "cr", value: "cr", text: "Cross Rivers" },
      { key: "dl", value: "dl", text: "Delta" },
    ]);
    return () => {
      // cleanup;
    };
  }, [setActiveNavItem]);

  return (
    <Menu fixed="top" secondary stackable size="mini" className="masthead-menu">
      <Container>
        <Menu.Item header as={NavLink} exact to="/">
          <img src="/assets/heart-beat-white.svg" alt="logo" />
        </Menu.Item>
        <Menu.Item>
          <Input icon="search" placeholder="Find a doctor" />
        </Menu.Item>
        <Menu.Item>
          <Select placeholder="Location" options={locationOptions} />
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            name="LOGIN"
            active={activeItem === "login"}
            onClick={handleItemClick}
            as={Link}
            to="/Login"
          />
          <Menu.Item
            name="SIGNUP"
            active={activeItem === "signup"}
            onClick={handleItemClick}
            as={Link}
            to="/SignUp"
          />
          <Menu.Item
            name="CONTACT US"
            active={activeItem === "contact us"}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

NavBar.propTypes = {
  setActiveNavItem: PropTypes.func,
  activeItem: PropTypes.string,
};

const mapStateToProps = (state) => ({
  activeItem: state.common.activeNavItem,
});

const mapDispatchToProps = {
  setActiveNavItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
