import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'components/Image'

import SolidButton from '../../components/solid-button'

const AppleAndPhone = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Apple-and-Phone - Innovation Store</title>
          <meta
            name="description"
            content="Proof of Concept site to demonstrate my skills with NextJS, Supabase (PostgreSQL), SWR, Clouflare Pages and GitHub."
          />
          <meta
            property="og:title"
            content="Apple-and-Phone - Innovation Store"
          />
          <meta
            property="og:description"
            content="Proof of Concept site to demonstrate my skills with NextJS, Supabase (PostgreSQL), SWR, Clouflare Pages and GitHub."
          />
        </Head>
        <div className="top-container">
          <nav data-role="Header" className="navbar">
            <h1>Innovation Store</h1>
            <div className="right-side">
              <div className="links-container">
                <Link href="/">
                  <span className="text">Home</span>
                </Link>
                <Link href="/about">
                  <span className="text01">About</span>
                </Link>
              </div>
              <Link
                href="https://github.com/FcoMarcosMAbreu"
                target="_blank"
                rel="noreferrer noopener"
                className="link"
              >
                <SolidButton
                  button="Contact"
                  className="component"
                ></SolidButton>
              </Link>
            </div>
            <div data-type="BurgerMenu" className="burger-menu">
              <svg viewBox="0 0 1024 1024" className="burger-menu">
                <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              </svg>
            </div>
            <div data-type="MobileMenu" className="mobile-menu">
              <div className="nav">
                <div className="top">
                  <h1>Travel</h1>
                  <div data-type="CloseMobileMenu" className="close-menu">
                    <svg viewBox="0 0 1024 1024" className="icon03">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <div className="right-side1">
                  <div className="links-container1">
                    <span className="text02">Home</span>
                    <span className="text03">About</span>
                    <span className="text04">Tour Packages</span>
                    <span>Contact</span>
                  </div>
                  <SolidButton button="Explore places"></SolidButton>
                </div>
              </div>
              <div className="follow-container">
                <span className="text06">
                  Follow us on
                </span>
                <div className="icons-container">
                  <Link
                    href="https://github.com/FcoMarcosMAbreu"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link5"
                  >
                    <svg viewBox="0 0 1024 1024" className="icon11">
                      <path d="M341.333 777.515c-36.907 7.509-61.995 5.163-79.787-0.469-9.856-3.115-18.389-7.509-26.197-12.885-17.536-12.117-31.019-28.8-47.744-50.005-15.189-19.243-36.267-47.232-66.176-62.976-7.893-4.181-16.469-7.552-25.771-9.899-22.869-5.717-46.037 8.192-51.755 31.061s8.192 46.037 31.061 51.755l6.613 2.56c10.752 5.675 20.779 17.237 38.997 40.363 15.616 19.797 36.523 46.848 66.261 67.371 14.165 9.771 30.336 18.176 49.024 24.064 30.379 9.6 65.067 11.947 105.515 5.76l-0.043 74.453c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-165.12c0-0.896-0.043-1.92-0.085-2.944-0.256-3.584-0.299-7.168-0.171-10.709 0.853-24.277 10.283-48.043 28.373-66.773 6.187-6.357 10.496-14.805 11.691-24.405 2.901-23.381-13.696-44.715-37.077-47.616-14.507-1.792-28.885-4.011-42.923-6.784-33.707-6.656-64.768-16.427-91.605-31.275-56.235-31.104-102.869-89.344-102.869-218.496-0.299-47.232 17.024-94.635 52.224-131.584 10.965-11.691 14.933-28.672 9.088-44.373-11.947-31.957-14.549-67.413-6.016-102.059 20.949 4.565 57.813 17.749 112.939 54.741 10.069 6.699 22.741 9.131 35.243 5.632 85.205-23.765 180.992-25.685 276.053 0.085 11.563 3.115 24.277 1.408 34.901-5.76 55.168-36.949 91.989-50.133 112.939-54.699 8.064 32.683 6.699 68.053-6.016 102.059-5.504 15.019-2.475 32.213 9.088 44.373 32.341 33.92 52.224 79.872 52.224 130.56 0 131.2-47.531 189.653-104.32 220.288-26.581 14.336-57.301 23.68-90.581 29.867-13.739 2.56-27.776 4.523-41.941 6.101-8.96 0.981-17.835 4.864-24.917 11.733-16.939 16.384-17.408 43.392-1.024 60.331 2.859 2.944 5.547 6.101 8.021 9.344 14.549 19.157 22.272 43.307 20.267 69.035 0 1.024-0.043 2.176-0.128 3.328v165.12c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-161.792c2.219-29.184-2.389-57.301-12.459-82.859 33.152-7.296 66.688-18.219 98.005-35.115 88.875-47.957 149.163-138.325 149.163-295.381 0-64.128-22.016-123.179-58.837-169.856 15.147-57.387 9.643-116.309-12.501-167.808-5.205-12.075-15.317-20.565-27.093-24.064-15.232-4.523-73.899-13.184-186.581 58.112-96.981-23.083-194.432-21.717-283.563-0.085-112.597-71.211-171.221-62.549-186.453-58.027-12.629 3.755-22.229 12.8-27.093 24.107-23.637 55.125-26.624 114.005-12.459 167.765-39.68 50.261-59.179 110.976-58.837 171.392 0 154.539 59.264 244.181 146.816 292.651 32.085 17.749 66.56 29.227 100.565 36.992-7.893 19.968-12.245 41.003-12.971 62.165-0.213 6.016-0.128 12.032 0.213 18.048z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <div className="hero">
            <Image src="/playground_assets/apple-1000w.png" alt="" className="image" />
            <div className="content-container">
              <h1 className="heading text07">Apple and Phone</h1>
              <h2 className="subheading">
                A innovative product to hold on with you
              </h2>
              <span className="text08">
                <span>
                  Apple is known as an innovative company and rich source of
                  vitamins and fiber.
                </span>
              </span>
              <SolidButton button="Reviews"></SolidButton>
            </div>
          </div>
        </div>
        <div id="main-section" className="main">
          <h1>Reviews</h1>
          <h2>See what others are saying</h2>
          <ul className="list">
            <li className="list-item">
              <span>Text</span>
            </li>
            <li className="list-item">
              <span>Text</span>
            </li>
            <li className="list-item">
              <span>Text</span>
            </li>
            <li className="list-item">
              <span>Text</span>
            </li>
          </ul>
          <div className="container1">
            <input
              type="text"
              placeholder="Your name"
              className="textinput input"
            />
            <textarea
              placeholder="Leave your comment"
              className="textarea"
            ></textarea>
            <SolidButton
              button="Send"
              rootClassName="rootClassName"
            ></SolidButton>
          </div>
        </div>
        <div className="footer">
          <div className="menu">
            <h1>Innovation Store</h1>
            <div className="links-container2">
              <div className="container2">
                <Link href="/about">
                  <span className="text16">About</span>
                </Link>
                <span className="text17">FAQ</span>
                <span className="text18">Terms and conditions</span>
                <Link
                  href="https://github.com/FcoMarcosMAbreu"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link4"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="follow-container1">
              <span className="text19">
                Follow me on
              </span>
              <div className="icons-container1">
                <Link
                  href="https://github.com/FcoMarcosMAbreu"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link5"
                >
                  <svg viewBox="0 0 1024 1024" className="icon11">
                    <path d="M341.333 777.515c-36.907 7.509-61.995 5.163-79.787-0.469-9.856-3.115-18.389-7.509-26.197-12.885-17.536-12.117-31.019-28.8-47.744-50.005-15.189-19.243-36.267-47.232-66.176-62.976-7.893-4.181-16.469-7.552-25.771-9.899-22.869-5.717-46.037 8.192-51.755 31.061s8.192 46.037 31.061 51.755l6.613 2.56c10.752 5.675 20.779 17.237 38.997 40.363 15.616 19.797 36.523 46.848 66.261 67.371 14.165 9.771 30.336 18.176 49.024 24.064 30.379 9.6 65.067 11.947 105.515 5.76l-0.043 74.453c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-165.12c0-0.896-0.043-1.92-0.085-2.944-0.256-3.584-0.299-7.168-0.171-10.709 0.853-24.277 10.283-48.043 28.373-66.773 6.187-6.357 10.496-14.805 11.691-24.405 2.901-23.381-13.696-44.715-37.077-47.616-14.507-1.792-28.885-4.011-42.923-6.784-33.707-6.656-64.768-16.427-91.605-31.275-56.235-31.104-102.869-89.344-102.869-218.496-0.299-47.232 17.024-94.635 52.224-131.584 10.965-11.691 14.933-28.672 9.088-44.373-11.947-31.957-14.549-67.413-6.016-102.059 20.949 4.565 57.813 17.749 112.939 54.741 10.069 6.699 22.741 9.131 35.243 5.632 85.205-23.765 180.992-25.685 276.053 0.085 11.563 3.115 24.277 1.408 34.901-5.76 55.168-36.949 91.989-50.133 112.939-54.699 8.064 32.683 6.699 68.053-6.016 102.059-5.504 15.019-2.475 32.213 9.088 44.373 32.341 33.92 52.224 79.872 52.224 130.56 0 131.2-47.531 189.653-104.32 220.288-26.581 14.336-57.301 23.68-90.581 29.867-13.739 2.56-27.776 4.523-41.941 6.101-8.96 0.981-17.835 4.864-24.917 11.733-16.939 16.384-17.408 43.392-1.024 60.331 2.859 2.944 5.547 6.101 8.021 9.344 14.549 19.157 22.272 43.307 20.267 69.035 0 1.024-0.043 2.176-0.128 3.328v165.12c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-161.792c2.219-29.184-2.389-57.301-12.459-82.859 33.152-7.296 66.688-18.219 98.005-35.115 88.875-47.957 149.163-138.325 149.163-295.381 0-64.128-22.016-123.179-58.837-169.856 15.147-57.387 9.643-116.309-12.501-167.808-5.205-12.075-15.317-20.565-27.093-24.064-15.232-4.523-73.899-13.184-186.581 58.112-96.981-23.083-194.432-21.717-283.563-0.085-112.597-71.211-171.221-62.549-186.453-58.027-12.629 3.755-22.229 12.8-27.093 24.107-23.637 55.125-26.624 114.005-12.459 167.765-39.68 50.261-59.179 110.976-58.837 171.392 0 154.539 59.264 244.181 146.816 292.651 32.085 17.749 66.56 29.227 100.565 36.992-7.893 19.968-12.245 41.003-12.971 62.165-0.213 6.016-0.128 12.032 0.213 18.048z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .top-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .navbar {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .right-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .links-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .text {
            margin-right: var(--dl-space-space-doubleunit);
          }
          .text01 {
            margin-right: var(--dl-space-space-doubleunit);
          }
          .link {
            display: contents;
          }
          .component {
            text-decoration: none;
          }
          .burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .burger-menu {
            width: 24px;
            height: 24px;
          }
          .mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: none;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .nav {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .icon03 {
            width: 24px;
            height: 24px;
          }
          .right-side1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .links-container1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: 16px;
            flex-direction: column;
            justify-content: space-between;
          }
          .text02 {
            margin-bottom: 8px;
          }
          .text03 {
            margin-bottom: 8px;
          }
          .text04 {
            margin-bottom: 8px;
          }
          .follow-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .text06 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .icons-container {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .link1 {
            display: contents;
          }
          .icon05 {
            width: 24px;
            height: 24px;
          }
          .link2 {
            display: contents;
          }
          .icon07 {
            width: 24px;
            height: 24px;
          }
          .link3 {
            display: contents;
          }
          .icon09 {
            width: 24px;
            height: 24px;
          }
          .hero {
            flex: 1;
            width: 100%;
            display: flex;
            max-width: 1000px;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .image {
            flex: 1;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .content-container {
            flex: 1;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .text08 {
            padding-top: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .main {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-quadruple);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-quadruple);
            justify-content: flex-start;
          }
          .container1 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .textinput {
            width: 50%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .textarea {
            width: 50%;
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer {
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .menu {
            width: 100%;
            display: flex;
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .links-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .container2 {
            display: flex;
            align-items: flex-start;
            margin-left: 100px;
            flex-direction: column;
          }
          .text16 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .text17 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .text18 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .link4 {
            text-decoration: none;
          }
          .follow-container1 {
            display: flex;
            align-items: center;
            margin-left: 50px;
            flex-direction: column;
            justify-content: space-between;
          }
          .text19 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .icons-container1 {
            width: 100px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .link5 {
            display: contents;
          }
          .icon11 {
            fill: #D9D9D9;
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 767px) {
            .right-side {
              display: none;
            }
            .burger-menu {
              display: flex;
            }
            .hero {
              justify-content: center;
            }
            .content-container {
              align-items: center;
            }
            .text07 {
              font-size: 2.5rem;
            }
            .text08 {
              text-align: center;
            }
            .main {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .menu {
              flex-direction: column;
            }
            .links-container2 {
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
              justify-content: space-between;
            }
          }
          @media (max-width: 479px) {
            .text07 {
              font-size: 2rem;
              text-align: center;
            }
            .subheading {
              font-size: 1.3rem;
              text-align: center;
            }
            .links-container2 {
              margin-top: var(--dl-space-space-doubleunit);
              align-items: flex-start;
              justify-content: flex-start;
            }
            .container2 {
              height: 100%;
              align-items: flex-start;
              margin-left: 50px;
            }
            .text16 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .text17 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .text18 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .link4 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .follow-container1 {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default AppleAndPhone
