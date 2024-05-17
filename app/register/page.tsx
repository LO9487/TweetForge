"use client"
import React, { useEffect } from 'react';
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';
import axios from "axios";
import { toast } from "react-hot-toast";

const RegisterPage = () => {
  const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/register", user);
            console.log("Signup success", response.data);
            router.push("/login");
            
        } catch (error:any) {
            console.log("Signup failed", error.message);
            
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);







    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              alt="Logo"
              className="mx-auto h-12 w-auto"
              height={50}
              src="/logo.png"
              style={{
                aspectRatio: "50/50",
                objectFit: "cover",
              }}
              width={50}
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            {loading ? "Processing" : "Signup a new account"}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
              Or{' '}
              <Link
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400"
                href="/login"
              >
                sign in to your account
              </Link>
            </p>
          </div>
          <form action="#" className="mt-8 space-y-6" method="POST">
            <input defaultValue="true" name="remember" type="hidden" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <Label className="sr-only" htmlFor="name">
                  Name
                </Label>
                <Input
                  autoComplete="name"
                  className="relative block w-full appearance-none rounded-none rounded-t-md border  border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500  dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400 dark:border-gray-800"
                  id="name"
                  value={user.username}
                  onChange={(e) => setUser({...user, username: e.target.value})}
                  placeholder="Name"
                  required
                  type="text"
                />
              </div>
              <div>
                <Label className="sr-only" htmlFor="email">
                  Email address
                </Label>
                <Input
                  autoComplete="email"
                  className="relative block w-full appearance-none rounded-none border  border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500  dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400 dark:border-gray-800"
                  id="email"
                  value={user.email}
                  onChange={(e) => setUser({...user, email: e.target.value})}
                  placeholder="Email address"
                  required
                  type="email"
                />
              </div>
              <div>
                <Label className="sr-only" htmlFor="password">
                  Password
                </Label>
                <Input
                  autoComplete="new-password"
                  className="relative block w-full appearance-none rounded-none border  border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500  dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400 dark:border-gray-800"
                  id="password"
                  value={user.password}
                  onChange={(e) => setUser({...user, password: e.target.value})}
                  placeholder="Password"
                  required
                  type="password"
                />
              </div>
            </div>
            <div>
              <Button
                onClick={onSignup}
                className="group relative flex w-full justify-center rounded-md border border-gray-200 border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-950 dark:border-gray-800"
                type="submit"
              >
                Sign up
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  }
  
export default RegisterPage;
