import Router from "next/router";

function Admin() {
  Router.push("/admin/berita");
  return <h1>Halo Admin</h1>;
}

export default Admin;
