import NewsItem from "../components/HeadlessComponent/NewsItem";

function Berita({ data }){
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
  return(
    <div className='py-16 bg-primary min-h-screen flex justify-center'>
      <div className='w-3/4'>
        <div className="grid grid-cols-2 md:grid-cols-4">{newsItems}</div>
      </div>
    </div>
  )
}
export async function getServerSideProps() {
  // eslint-disable-next-line no-undef
  const backend = process.env.BACKEND
  const result = await fetch(backend+"/post", {
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

export default Berita