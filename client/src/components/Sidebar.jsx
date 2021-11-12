import logo from "../assets/logo.svg";
import Home from "../assets/Home.svg";
import star from "../assets/star.svg";
import contact from "../assets/contact.svg";
import folder from "../assets/folder.svg";
import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  .active {
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;
const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: var(--black);
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Logo = styled.div`
  width: 2rem;
  img {
    width: 100%;
    height: auto;
  }
`;

const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);
  padding: 2rem 0;
  
  position: absolute;
  top: 6rem;
  left: 0;
  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;



const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [profileClick, setprofileClick] = useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);
  return (
    <>
      <Button clicked={click} onClick={() => handleClick()}>
        Click
      </Button>
      <SidebarContainer>
        <div>
          <Logo>
            <img src={logo} alt="logo" />
          </Logo>
          <SlickBar clicked={click}>
            <li>
              <img src={Home} alt="Home" />
              <span>Home</span>
            </li>
            <li>
              <img src={star} alt="Star" />
              <span>About</span>
            </li>
            <li>
              <img src={folder} alt="projects" />
              <span>projects</span>
            </li>
            <li>
              <img src={contact} alt="contact" />
              <span>contact</span>
            </li>
            <li>
              <img src={star} alt="star" />
              <span>star</span>
            </li>
          <div>
            <img src="profile" alt="profile" />
            <div>
              <div>
                <h4>Aaron Harris</h4>
                <a href="#">view profile</a>
              </div>
              <button>
                <img src={star} alt="logout" />
              </button>
            </div>
          </div>
          </SlickBar>
        </div>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
