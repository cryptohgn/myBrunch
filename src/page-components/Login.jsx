
function Login({ setIsLogged }) {

    const handleLogin = () => {
      setIsLogged(true);
    };
  
    return (
      <div>
        <h2>Login</h2>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }
  
  export default Login;
  