import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../store/authSlice.js";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, Input } from "./index.js";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);

  const create = async (data) => {
    setError(null);

    try {
      const response = await authService.createAccount(data);

      if (response) {
        const userData = await authService.getCurrentUser();

        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(create)}
      className="space-y-4 bg-[#d3d9d4] p-5 rounded-lg"
    >
      <Input
        type="text"
        label="Full Name: "
        placeholder="e.g. Ans Hamad"
        {...register("name", {
          required: true,
        })}
      />

      <Input
        type="email"
        label="Email: "
        placeholder="example@gmail.com"
        {...register("email", {
          required: true,
          validate: {
            matchPattern: (value) =>
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
              "Email address must be a valid address",
          },
        })}
      />

      <Input
        type="password"
        label="Password: "
        placeholder="******"
        {...register("password", {
          required: true,
        })}
      />

      {error && (
        <button className="px-4 py-2 bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 rounded-md text-sm font-medium">
          {error}
        </button>
      )}

      <Button type="submit" className="w-full">
        Sign Up
      </Button>

      <p className="text-center text-muted-foreground text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-black hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Signup;
