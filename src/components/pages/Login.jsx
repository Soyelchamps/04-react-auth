import useForm from "../../hooks/useForm";
import { LoginUser } from "@/services/UserServices.js";

function Login() {
  const sendData = async (data) => {
    try {
      const result = await LoginUser(data);
      if (result.status === 200) {
        console.log(result);
      }
      console.log(result);
    } catch (error) {
      alert("Ocurrio un error: " + error.message);
    }

    LoginUser(data);
  };

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: "",
    password: "",
  });
  return (
    <form className="container">
      <div className="mt-5 mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          name="email"
          onChange={handleInputChange}
          value={input.email}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            name="password"
            onChange={handleInputChange}
            value={input.password}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-8 offset-2">
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={handleSubmit}
          >
            Primary
          </button>
        </div>
      </div>
    </form>
  );
}

export default Login;
