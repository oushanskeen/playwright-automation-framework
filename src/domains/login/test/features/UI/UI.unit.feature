
    
    Feature: UI module requirements matrix test

    Scenario Outline: unit scenario driven by test matrix
      Given the requirement "<REQ-ID>"
      Given the requirement risk "<RISK-ID>"
      Given the test id "<TEST-ID>"
      Given the test name "<Scenario Name>"
      When the unit input is "<Input>"
      Then the unit output is "<Output>"

        Examples:
           | REQ-ID | RISK-ID | TEST-ID | Scenario Name | Input | DB Input|
           | REQ-01 | RSK-01 | FT01 | Successful Login | login=x&pass=y | user valid creds|
           | REQ-01 | RSK-02 | FT02 | Invalid Credentials | login=x&pass=z | user creds invalid|
           | REQ-01 | RSK-03 | FT03 | Missing Credentials | login=null&pass=null | N/A|
           | REQ-02 | RSK-04 | FT04 | User Locked | login=xLocked&pass=y | locked user valid creds|
           | REQ-03 | RSK-05 | FT05 | Password Expired | login=x&pass=oldpass | user creds with expired password|
           | REQ-03 | RSK-06 | FT06 | Account Not Verified | login=xUnverified&pass=y | unverified user creds |