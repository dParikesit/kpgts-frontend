import Link from "next/link";

function NewsItem(props) {
  return (
    <div className="flex flex-col justify-between bg-secondary rounded-lg px-4 pt-4 my-2 mr-4">
      <div className="flex flex-col items-start flex-wrap">
        <h4 className="text-xl font-semibold text-text">{props.title}</h4>
        <p className="text-sm text-text break-all">{props.description}</p>
      </div>
      <div className="flex">
        <Link href={props.slug} key={props.slug}>
          <button className="my-3 text-text text-lg font-bold p-2 border-primary border-2 rounded-lg">
            Edit
          </button>
        </Link>
        <button className="my-3 text-text text-lg font-bold p-2 border-primary border-2 rounded-lg mx-3">
          Delete
        </button>
      </div>
    </div>
  );
}

export default NewsItem;
