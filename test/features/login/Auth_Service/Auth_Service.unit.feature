
    
    Feature: Auth Service module requirements matrix test

    Scenario Outline: unit scenario driven by test matrix
      Given the requirement "<REQ-ID>"
      Given the requirement risk "<RISK-ID>"
      Given the test id "<TEST-ID>"
      Given the test name "<Scenario Name>"
      When the unit input is "<Input>"
        Then the unit output is "<Output>"

        Examples:
           | REQ-ID | RISK-ID | TEST-ID | Scenario Name | Input | Output|
           | REQ-01 | RSK-01 | FT01 | Successful Login | receives creds | creds valid|
           | REQ-01 | RSK-02 | FT02 | Invalid Credentials | receives creds | creds invalid|
           | REQ-01 | RSK-03 | FT03 | Missing Credentials | invalid request | validation failed|
           | REQ-02 | RSK-04 | FT04 | User Locked | receives creds | user locked|
           | REQ-03 | RSK-05 | FT05 | Password Expired | receives creds | password expired|
           | REQ-03 | RSK-06 | FT06 | Account Not Verified | receives creds | unverified |