<<<<<<< HEAD
=======
// Write all the code here
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
import React, { useState } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const Login = () => {
  const [justifyActive, setJustifyActive] = useState("tab1");

<<<<<<< HEAD
  const handleTabChange = (tabId) => {
    setJustifyActive(tabId);
=======
  const toggleJustify = (value) => {
    if (value !== justifyActive) {
      setJustifyActive(value);
    }
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
  };

  return (
    <MDBContainer className="my-5">
<<<<<<< HEAD
      <MDBTabs justify className="mb-3">
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleTabChange("tab1")}
=======
      <MDBTabs justify pills>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => toggleJustify("tab1")}
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
            active={justifyActive === "tab1"}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
<<<<<<< HEAD
            onClick={() => handleTabChange("tab2")}
            active={justifyActive === "tab2"}
          >
            Signup
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          {/* Login Form */}
=======
            onClick={() => toggleJustify("tab2")}
            active={justifyActive === "tab2"}
          >
            Sign Up
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
          <div className="text-center mb-3">
            <p>Sign in with:</p>
            <div
              className="d-flex justify-content-between mx-auto"
              style={{ width: "40%" }}
            >
<<<<<<< HEAD
                <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>
              <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>
              <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>
              <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
=======
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>
            <p className="text-center mt-3">or:</p>
          </div>
          <MDBInput wrapperClass="mb-4" label="Email address" id="form1" type="email" />
          <MDBInput wrapperClass="mb-4" label="Password" id="form2" type="password" />
          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div>
          <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
          <p className="text-center">
            Not a member? <a href="#!">Register</a>
          </p>
        </MDBTabsPane>
<<<<<<< HEAD
        <MDBTabsPane show={justifyActive === "tab2"}>
          {/* Signup Form */}
=======

        <MDBTabsPane show={justifyActive === "tab2"}>
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
          <div className="text-center mb-3">
            <p>Sign up with:</p>
            <div
              className="d-flex justify-content-between mx-auto"
              style={{ width: "40%" }}
            >
<<<<<<< HEAD
                <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>
              <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>
              <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>
              <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
=======
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>
            <p className="text-center mt-3">or:</p>
          </div>
<<<<<<< HEAD
          <MDBInput wrapperClass="mb-4" label="Full Name" id="form3" type="text" />
          <MDBInput wrapperClass="mb-4" label="Email address" id="form4" type="email" />
          <MDBInput wrapperClass="mb-4" label="Password" id="form5" type="password" />
          {/* Additional Signup Fields as needed */}
          <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
          <p className="text-center">
            Already a member? <a href="#!" onClick={() => handleTabChange("tab1")}>Login</a>
=======
          <MDBInput wrapperClass="mb-4" label="Your name" id="form3" type="text" />
          <MDBInput wrapperClass="mb-4" label="Email address" id="form4" type="email" />
          <MDBInput wrapperClass="mb-4" label="Password" id="form5" type="password" />
          <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
          <p className="text-center">
            Already a member? <a href="#!">Login</a>
>>>>>>> e30e399b013b7b0370951066c43d060ac03ad515
          </p>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
};

export default Login;