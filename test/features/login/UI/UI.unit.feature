
    
    Feature: UI module requirements matrix test

    Scenario Outline: unit scenario driven by test matrix
      Given the requirement "<REQ-ID>"
      Given the requirement risk "<RISK-ID>"
      Given the test id "<TEST-ID>"
      Given the test name "<Scenario Name>"
      When the unit input is "<Input>"
      Then the unit output is "<Output>"

        Examples:
           | REQ-ID | RISK-ID | TEST-ID | Scenario Name | Input | Output|
           | REQ-01 | RSK-01 | FT01 | Successful Login | login=x&pass=y | Ok|
           | REQ-01 | RSK-02 | FT02 | Invalid Credentials | login=x&pass=z | Invalid username or password|
           | REQ-01 | RSK-03 | FT03 | Missing Credentials | login=null&pass=null | Username and password required|
           | REQ-02 | RSK-04 | FT04 | User Locked | login=xLocked&pass=y | Your account is locked. Contact support|
           | REQ-03 | RSK-05 | FT05 | Password Expired | login=x&pass=oldpass | Reset Password|
           | REQ-03 | RSK-06 | FT06 | Account Not Verified | login=xUnverified&pass=y | Please verify your email to continue |