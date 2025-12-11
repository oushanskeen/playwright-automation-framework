
    
    Feature: API module requirements matrix test

    Scenario Outline: unit scenario driven by test matrix
      Given the requirement "<REQ-ID>"
      Given the requirement risk "<RISK-ID>"
      Given the test id "<TEST-ID>"
      Given the test name "<Scenario Name>"
      When the unit input is "<Input>"
        Then the unit output is "<Output>"

        Examples:
           | REQ-ID | RISK-ID | TEST-ID | Scenario Name | Input | Output|
           | REQ-01 | RSK-01 | FT01 | Successful Login | POST /login?login=x&pass=y | 200 OK + token|
           | REQ-01 | RSK-02 | FT02 | Invalid Credentials | POST /login?login=x&pass=z | 401 Unauthorized|
           | REQ-01 | RSK-03 | FT03 | Missing Credentials | POST /login?login=null&pass=null | 400 Bad Request|
           | REQ-02 | RSK-04 | FT04 | User Locked | POST /login?login=xLocked&pass=y | 423/403 Forbidden|
           | REQ-03 | RSK-05 | FT05 | Password Expired | POST /login?login=x&pass=oldpass | 403 Forbidden|
           | REQ-03 | RSK-06 | FT06 | Account Not Verified | POST /login?ogin=xUnverified&pass=y | 403 Forbidden |