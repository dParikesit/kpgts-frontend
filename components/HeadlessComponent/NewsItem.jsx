import Link from "next/link";
import { useRouter } from 'next/router'

function NewsItem(props) {
  const router = useRouter()

  if(router.asPath === '/admin/berita'){
    return (
      <div className="flex flex-col justify-between bg-secondary rounded-lg px-4 pt-4 my-2 mr-4">
        <div className="flex flex-col items-start flex-wrap">
          <Link href={'/news/'+props.slug} key={props.slug}>
            <a><h4 className="text-xl font-semibold text-text capitalize">{props.title}</h4></a>
          </Link>
          <p className="text-sm text-text break-all ">{props.description}</p>
        </div>
        <div className="flex">
          <Link href={'/news/'+props.slug} key={props.slug}>
            <button className="my-3 text-text text-lg font-bold p-2 border-primary border-2 rounded-lg">
              <a>Edit</a>
            </button>
          </Link>
          <button className="my-3 text-text text-lg font-bold p-2 border-primary border-2 rounded-lg mx-3">
            Delete
          </button>
        </div>
      </div>
    );
  } else{
    return (
      <Link href={"/news/" + props.slug} key={props.slug}>
        <div className="flex flex-col justify-between cursor-pointer bg-secondary rounded-lg px-4 pt-4 my-2 mr-4">
          <div className="flex flex-col items-start flex-wrap">
            <h4 className="text-xl font-semibold text-primary">
              {props.title}
            </h4>
            <p className="text-sm text-primary break-all my-4">
              {props.description}
            </p>
          </div>
        </div>
      </Link>
    );
  }
}

export default NewsItem;
