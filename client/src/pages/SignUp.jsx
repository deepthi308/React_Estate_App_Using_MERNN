import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = ({ target }) => {
    const { id, value } = target;
    setFormData((currFormData) => ({
      ...currFormData,
      [id]: value,
    }));
  };

  // console.log(formData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    // console.log(res);
    try {
      const res = await axios.post("/api/auth/signup", formData);
      // console.log(res.data);
      if (res.data.success) {
        setLoading(false);
        setError(null);
        navigate("/sign-in");
      } else {
        setLoading(false);
        setError(res.data.statusCode.errorResponse.errmsg);
      }

      console.log("success");
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  };

  // console.log(error);

  return (
    <section className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          className="bg-slate-100 outline-none border-1 border-slate-300  p-3 rounded-lg"
          id="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="email"
          className="bg-slate-100 outline-none border-1 border-slate-300  p-3 rounded-lg"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="password"
          className="bg-slate-100 outline-none border-1 border-slate-300  p-3 rounded-lg"
          id="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button
          disabled={loading ? true : false}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 cursor-pointer disabled:opacity-80"
        >
          {loading ? "Loading" : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </section>
  );
}
