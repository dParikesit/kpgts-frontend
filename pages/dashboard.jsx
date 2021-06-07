import { useEffect, useState } from "react";

function Dashboard() {
  // eslint-disable-next-line no-undef
  let backend = process.env.NEXT_PUBLIC_BACKEND;
  const [form, setForm] = useState({
    email: "",
    sekolah: "SMAN 3 Semarang",
    telepon: "",
    mapel: "ipa",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    let user = {
      email: document.getElementById("email").value,
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
        console.log(form);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="bg-primary py-16 h-screen">
        <h1>User Detail</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ email: e.target.value })}
            ></input>
          </div>
          <div>
            <label htmlFor="sekolah">Sekolah</label>
            <select
              value={form.sekolah}
              id="sekolah"
              name="sekolah"
              onChange={(e) => setForm({ sekolah: e.target.value })}
            >
              <option value="SMAN 3 Semarang">SMAN 3 Semarang</option>
              <option value="SMAN 5 Semarang">SMAN 5 Semarang</option>
            </select>
          </div>
          <div>
            <label htmlFor="telepon">Nomor telepon</label>
            <input
              value={form.telepon}
              id="telepon"
              name="telepon"
              onChange={(e) => setForm({ telepon: e.target.value })}
            ></input>
          </div>
          <div>
            <label htmlFor="mapel">Mata Pelajaran</label>
            <select
              value={form.mapel}
              id="mapel"
              name="mapel"
              onChange={(e) => setForm({ mapel: e.target.value })}
            >
              <option value="ipa">IPA</option>
              <option value="ips">IPS</option>
            </select>
          </div>
          <div>
            <button type="submit">Update Data</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Dashboard;
