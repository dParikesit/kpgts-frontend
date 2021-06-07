import AdminSidebar from "../../components/SideBar/AdminSideBar";
import NewsItem from "../../components/HeadlessComponent/NewsItem";
import PostForm from "../../components/HeadlessComponent/PostForm";

function Berita({ data }) {
  console.log(data);
  let newsItems = data.map((newsItem) => {
    return (
      <NewsItem
        key={newsItem.title}
        title={newsItem.title}
        description={newsItem.description}
        slug={newsItem.slug}
      />
    );
  });

  return (
    <div className="bg-primary flex">
      <div className="flex flex-col w-64 px-4 py-16 bg-primary h-screen bg-white border-r dark:bg-gray-800 dark:border-gray-600">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
          Brand
        </h2>
        <AdminSidebar />
      </div>
      <div className="py-16 px-4">
        <PostForm
          title=""
          slug=""
          description=""
          content=""
          date={new Date()}
          image={null}
        />
        <div className="grid grid-cols-2 md:grid-cols-4">{newsItems}</div>
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  const result = await fetch("http://localhost:3001/post", {
    method: "GET",
    mode: "cors",
  });
  const data = await result.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Berita;
