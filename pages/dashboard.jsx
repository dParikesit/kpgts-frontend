import { useEffect, useState } from "react";

function Dashboard() {
  // eslint-disable-next-line no-undef
  let backend = process.env.NEXT_PUBLIC_BACKEND;
  const [form, setForm] = useState({
    email: "",
    name: "",
    sekolah: "SMAN 3 Semarang",
    telepon: "",
    mapel: "ipa",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    let user = {
      email: document.getElementById("email").value,
      name: document.getElementById("name").value,
      sekolah: document.getElementById("sekolah").value,
      telepon: document.getElementById("telepon").value,
      mapel: document.getElementById("mapel").value,
    };
    fetch(backend + "/user/detail", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };
  useEffect(() => {
    fetch(backend + "/user/detail", {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setForm({ ...res });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="bg-primary py-16 h-screen px-4">
        <form
          onSubmit={submitHandler}
          className="bg-secondary p-4 my-4 mx-0 rounded-lg w-1/2"
        >
          <h1 className="text-black text-lg">User Detail</h1>
          <div className="grid grid-cols-2 py-2">
            <label htmlFor="email" className="text-primary">
              Email
            </label>
            <input
              id="email"
              name="email"
              value={form.email}
              className="p-1 bg-white focus:outline-none flex-1 block w-full rounded-md sm:text-sm border-2 border-opacity-5"
              onChange={(e) => setForm({ email: e.target.value })}
              disabled={true}
            ></input>
          </div>
          <div className="grid grid-cols-2 py-2">
            <label htmlFor="email" className="text-primary">
              Nama Lengkap
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              className="p-1 bg-white focus:outline-none flex-1 block w-full rounded-md sm:text-sm border-2 border-opacity-5"
              onChange={(e) => setForm({ name: e.target.value })}
              required={true}
            ></input>
          </div>
          <div className="grid grid-cols-2 py-2">
            <label htmlFor="sekolah" className="text-primary">
              Sekolah
            </label>
            <select
              value={form.sekolah}
              id="sekolah"
              name="sekolah"
              className="p-1 bg-white focus:outline-none flex-1 block w-full rounded-md sm:text-sm border-2 border-opacity-5"
              onChange={(e) => setForm({ sekolah: e.target.value })}
            >
              <option value="SMAN 3 Semarang">SMAN 3 Semarang</option>
              <option value="SMAN 5 Semarang">SMAN 5 Semarang</option>
            </select>
          </div>
          <div className="grid grid-cols-2 py-2">
            <label htmlFor="telepon" className="text-primary">
              Nomor telepon
            </label>
            <input
              value={form.telepon}
              id="telepon"
              name="telepon"
              className="p-1 bg-white focus:outline-none flex-1 block w-full rounded-md sm:text-sm border-2 border-opacity-5"
              onChange={(e) => setForm({ telepon: e.target.value })}
              required={true}
            ></input>
          </div>
          <div className="grid grid-cols-2 py-2">
            <label htmlFor="mapel" className="text-primary">
              Mata Pelajaran
            </label>
            <select
              value={form.mapel}
              id="mapel"
              name="mapel"
              className="p-1 bg-white focus:outline-none flex-1 block w-full rounded-md sm:text-sm border-2 border-opacity-5"
              onChange={(e) => setForm({ mapel: e.target.value })}
            >
              <option value="ipa">IPA</option>
              <option value="ips">IPS</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-2 font-medium tracking-wide text-primary capitalize transition-colors duration-200 transform border-2 rounded-md focus:outline-none"
            >
              Update Data
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Dashboard;
