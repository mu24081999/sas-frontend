import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/authApi";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const { login: authLogin } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
  });

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      authLogin(data.user, data.token);
      toast.success("Login successful!");
      navigate(`/${data?.user?.role}-dashboard`);
      // navigate(`/dashboard`);
    },
    onError: (error) => {
      toast.error(error.response?.data?.msg || "Login failed");
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Email"
        type="email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address",
          },
        })}
        error={errors.email?.message}
      />
      <Input
        label="Password"
        type="password"
        {...register("password", { required: "Password is required" })}
        error={errors.password?.message}
      />
      <p>
        Not have an account? <Link to="/public-register">Create one</Link>
      </p>
      <p>
        Forgot your password? <Link to="/forgot-password">Reset Password</Link>
      </p>
      <Button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};
