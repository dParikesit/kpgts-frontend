/* eslint-disable no-undef */
/* import { useRouter } from 'next/router' */
import Image from "next/image";
import PostForm from "../../components/HeadlessComponent/PostForm";
import { AuthContext } from "../../components/Controller/AuthContext";
import { useContext } from "react";

const News = ({ data }) => {
/*   const router = useRouter()
  const { slug } = router.query */
  const Auth = useContext(AuthContext)
  console.log(Auth.role)
  const form = () => {
    if (Auth.role == "Admin") {
      return(<PostForm
        title={data.title}
        slug={data.slug}
        description={data.description}
        content={data.content}
        date={data.date}
        image={null}
      />)
    }
  };

  return (
    <div className="py-16 bg-primary p-4 min-h-screen flex flex-col items-center">
      <div className='w-4/5'>{form()}</div>
      <h1 className="text-3xl capitalize">{data.title}</h1>
      <div className="w-3/4 h-1/4 p-5 md:w-1/2">
        <Image
          src={
            "data:" +
            data.image.mimetype +
            ";base64," +
            Buffer.from(data.image.data).toString("base64")
          }
          width={960}
          height={540}
        ></Image>
      </div>
      <h3 className="text-lg text-justify break-words">{data.content}</h3>
    </div>
  );
}

export default News

export async function getServerSideProps({params}) {
  const slug = params.slug
  const result = await fetch("http://localhost:3001/post/"+slug, {
    method: "GET",
    mode: "cors",
  });
  let data = await result.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}