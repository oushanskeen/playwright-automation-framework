
    
    Feature: DB module requirements matrix test

    Scenario Outline: unit scenario driven by test matrix
      Given the requirement "<REQ-ID>"
      Given the requirement risk "<RISK-ID>"
      Given the test id "<TEST-ID>"
      Given the test name "<Scenario Name>"
      When the unit input is "<Input>"
      Then the unit output is "<Output>"

        Examples:
           | REQ-ID | RISK-ID | TEST-ID | Scenario Name | Input | Output|
           | REQ-01 | RSK-01 | FT01 | Successful Login | user valid creds | user record|
           | REQ-01 | RSK-02 | FT02 | Invalid Credentials | user creds invalid | user invalid status|
           | REQ-01 | RSK-03 | FT03 | Missing Credentials | N/A | N/A|
           | REQ-02 | RSK-04 | FT04 | User Locked | locked user valid creds | user locked status|
           | REQ-03 | RSK-05 | FT05 | Password Expired | user creds with expired password | user pass expired status|
           | REQ-03 | RSK-06 | FT06 | Account Not Verified | unverified user creds | unverified status |