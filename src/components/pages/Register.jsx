import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { RegisterUser } from "@/services/UserServices.js";

function Register() {
  const Navigate = useNavigate();
  const sendData = async (data) => {
    try {
      const result = await RegisterUser(data);
      if (result.status === 200) {
        Navigate("/login");
      }
      console.log(result);
    } catch (error) {
      alert("Ocurrio un error: " + error.message);
    }
  };

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: "",
    last_name: "",
    birth_date: "",
    gender: "",
    email: "",
    password: "",
  });
  return (
    <form className="container">
      <div className="mt-5 mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="first_name"
          onChange={handleInputChange}
          value={input.first_name}
          className="form-control"
          id="name"
          placeholder="John"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="last-name" className="form-label">
          Last name
        </label>
        <input
          type="text"
          name="last_name"
          onChange={handleInputChange}
          value={input.last_name}
          className="form-control"
          id="last-name"
          placeholder="Doe"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="birth" className="form-label">
          Birthday
        </label>
        <input
          type="date"
          name="birth_date"
          className="form-control"
          id="birth"
          onChange={handleInputChange}
          value={input.birth_date}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="last-name" className="form-label">
          Gender
        </label>
        <select
          className="form-select"
          name="gender"
          onChange={handleInputChange}
          value={input.gender}
        >
          <option value="Select a gender" disabled>
            Select a gender
          </option>
          <option value="M">M</option>
          <option value="F">F</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          value={input.email}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
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

export default Register;
