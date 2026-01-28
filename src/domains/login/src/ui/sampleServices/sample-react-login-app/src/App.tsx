import './App.css'
import React, { useState, useEffect } from 'react';
import LoginAPIService from './LoginAPIService';
const contract = await import("../contract.json")
import initFrontendTracer from './utils/telemetry/Instrumentation';

import { traceAsync } from './utils/telemetry/useTraceSpan';


// if (typeof window !== 'undefined') FrontendTracer();

function App() {

  useEffect(() => {
    initFrontendTracer();
  }, []);

  const [login, setLogin] = useState("");
  const [pwd, setPwd] = useState("");
  const [status, setStatus] = useState("");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loginService = LoginAPIService()

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     FrontendTracer();
  //   }
  // }, []);

  const submitHandle = async (e: any) => {
    e.preventDefault();
    let response = undefined
    let responseMap: any = undefined
    let out: any = undefined

    await traceAsync(
      'ui.login.submit',
      {
        'ui.component': 'LoginForm',
        'user.login': login,
        'user.pass': pwd,
        'loginApi.response': response,
        'loginApi.outStatus': out,
      }),
      // async () => {
      // );
      await loginService.post(`/login?login=${login}&pass=${pwd}`);
    response = await loginService.getLatestResponse()
    responseMap = contract["apiToUiContract"]
    out = responseMap[response]
    // },
    setStatus(out)
  }

  return (
    <>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          placeholder="input login"
          data-testid="login-input"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="text"
          placeholder="input password"
          data-testid="password-input"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <input
          type="submit"
          value="submit"
          data-testid="submit-button"
        />
        <div
          data-testId="loginStatus-text"
        >{status}</div>
      </form>
    </>
  )
}

export default App
