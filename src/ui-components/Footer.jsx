import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0">
      <footer className="footer footer-center bg-base-200 text-base-content p-4 w-screen">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by DEV-TINDER Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
