
    
    Feature: Token Service module requirements matrix test

    Scenario Outline: unit scenario driven by test matrix
      Given the requirement "<REQ-ID>"
      Given the requirement risk "<RISK-ID>"
      Given the test id "<TEST-ID>"
      Given the test name "<Scenario Name>"
      When the unit input is "<Input>"
      Then the unit output is "<Output>"

        Examples:
           | REQ-ID | RISK-ID | TEST-ID | Scenario Name | Input | Output|
           | REQ-01 | RSK-01 | FT01 | Successful Login | token request | token issued|
           | REQ-01 | RSK-02 | FT02 | Invalid Credentials | N/A | N/A|
           | REQ-01 | RSK-03 | FT03 | Missing Credentials | N/A | N/A|
           | REQ-02 | RSK-04 | FT04 | User Locked | N/A | N/A|
           | REQ-03 | RSK-05 | FT05 | Password Expired | N/A | N/A|
           | REQ-03 | RSK-06 | FT06 | Account Not Verified | N/A | N/A |