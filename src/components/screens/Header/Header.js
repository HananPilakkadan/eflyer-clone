import React, { useEffect, useState } from "react";
import "./Header.css";
import {
  CaretDownOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  DownOutlined,
  CloseOutlined,
} from "@ant-design/icons";

import axios from "axios";
import { BASE_URL } from "../../../axiosConfig";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setSearchTerm, fetchProducts } from "../../../Redux/products/product";

const Header = () => {
  const [hamburger, setHamburger] = useState(true);
  const [langDropDown, setLangDropDown] = useState(false);
  const [categoryDropDown, setCategoryDropDown] = useState(false);
  const [category, setCategory] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`${BASE_URL}/categories`).then((response) => {
      setCategory(response.data);
    });
  }, []);

  const navigate = useNavigate();

  const handleCategoryUrl = (title) => {
    dispatch(fetchProducts(title));
    navigate(`/?category=${title}`);
    console.log(title);
  };

  // const searchUrl = () => {
  //   // dispatch(fetchProducts(null));
  // }

  const handleHamburger = () => {
    setHamburger(!hamburger);
  };
  const closeHamburger = () => {
    setHamburger(!hamburger);
  };
  const handleCategory = () => {
    setCategoryDropDown(!categoryDropDown);
  };
  const handleLang = () => {
    setLangDropDown(!langDropDown);
  };

  const handleSearchChange = (e) => {
    e.preventDefault();
    const searchTerm = e.target.value;
    dispatch(setSearchTerm(searchTerm));
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="top-header">
            <ul>
              <li>
                <a href="#">best sellers</a>
              </li>
              <li>
                <a href="#">gift ideas</a>
              </li>
              <li>
                <a href="#">new releases</a>
              </li>
              <li>
                <a href="#">today's deals</a>
              </li>
              <li>
                <a href="#">customer service</a>
              </li>
            </ul>
          </div>
          <div className="logo-box">
            <h1>
              <a href="#">
                <img src={require("../../assets/image/logo.png")} alt="Logo" />
              </a>
            </h1>
          </div>
          <div className="bottom-header">
            <div className="left-box">
              <div className="hamburger header-item" onClick={handleHamburger}>
                <img
                  src={require("../../assets/image/hamburger.png")}
                  alt="Hamburger"
                />
                <div
                  className={
                    hamburger ? "hamburger-menu" : "hamburger-menu active"
                  }
                >
                  <div className="close">
                    <span onClick={closeHamburger}>
                      <CloseOutlined />
                    </span>
                  </div>
                  <div className="content">
                    {category?.map((item, key) => {
                      return (
                        <>
                          <span
                            key={key}
                            onClick={() => handleCategoryUrl(item)}
                          >
                            {item}
                          </span>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="header-item category" onClick={handleCategory}>
                <button>
                  <span>All categories</span>
                  <CaretDownOutlined />
                </button>
                {categoryDropDown && (
                  <div className="drop-down">
                    {category?.map((item, key) => {
                      return (
                        <>
                          <span
                            key={key}
                            onClick={() => handleCategoryUrl(item)}
                          >
                            {item}
                          </span>
                        </>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="header-item form-box">
                <form action="#">
                  <input
                    type="text"
                    placeholder="Search this blog"
                    onChange={(e) => handleSearchChange(e)}
                  />
                  <button>
                    <SearchOutlined />
                  </button>
                </form>
              </div>
            </div>
            <div className="right-box">
              <div className="header-item languages" onClick={handleLang}>
                <a href="#" className="language">
                  <img
                    src={require("../../assets/image/flag-uk.png")}
                    alt="UK"
                  />
                  <span>English</span>
                  <DownOutlined />
                </a>
                {langDropDown && (
                  <div className="drop-down">
                    <a href="#">
                      <img
                        src={require("../../assets/image/flag-france.png")}
                        alt="UK"
                      />
                      <span>French</span>
                    </a>
                  </div>
                )}
              </div>
              <div className="header-item user">
                <div className="user-item">
                  <span>
                    <ShoppingCartOutlined />
                    Cart
                  </span>
                </div>
                <div className="user-item">
                  <span>
                    <UserOutlined />
                    Cart
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
