import Router from "next/router";

function registration() {
  // eslint-disable-next-line no-undef
  let backend = process.env.NEXT_PUBLIC_BACKEND;
  let user = {
    email: "",
    password: "",
  };

  const emailHandler = (e) => {
    user.email = e.target.value;
  };
  const passwordHandler = (e) => {
    user.password = e.target.value;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(backend)
    fetch(backend + "/user/register", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.message);
        Router.push("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center bg-primary">
        <div className="w-3/4 md:max-w-md">
          <div>
            <img
              className="mx-auto h-48 w-auto"
              src="/img/logo.png"
              alt="logo"
            ></img>
            <h2 className="mt-6 text-center text-3xl font-extrabold">
              Register Account
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={submitHandler}
            method="POST"
          >
            <input type="hidden" name="remember" value="true"></input>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  onBlur={emailHandler}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                ></input>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  onBlur={passwordHandler}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                ></input>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-text bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default registration;
