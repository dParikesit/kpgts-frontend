import Link from "next/link";

function AdminSidebar() {
  return (
    <div className="flex flex-col justify-between flex-1 mt-6">
      <nav>
        <Link href="/admin/berita">
          <a
            className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
            href="#"
          >
            <span className="mx-4 font-medium">Berita</span>
          </a>
        </Link>
        <Link href="/admin/peserta">
          <a
            className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200"
            href="#"
          >
            <span className="mx-4 font-medium">Peserta</span>
          </a>
        </Link>
        <hr className="my-6 dark:border-gray-600" />
        <a
          className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
          href="#"
        >
          <span className="mx-4 font-medium">Settings</span>
        </a>
      </nav>
    </div>
  );
}

export default AdminSidebar;
