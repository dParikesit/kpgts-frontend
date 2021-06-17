import {useRouter} from "next/router";
import { useState } from "react";

function PostForm(props) {
  // eslint-disable-next-line no-undef
  let backend = process.env.NEXT_PUBLIC_BACKEND;
  let [isOpen, setIsOpen] = useState(false);
  let [title, setTitle] = useState(props.title);
  let [slug, setSlug] = useState(props.slug);
  let [description, setDescription] = useState(props.description);
  let [content, setContent] = useState(props.content);
  let [date, setDate] = useState(props.date);
  let [image, setImage] = useState(props.image);
  const Router = useRouter()
  const pageChecker = ()=>{
    if(Router.pathname === '/admin/berita'){
      return('Create Post')
    } else if (Router.pathname === '/news/[slug]'){
      return('Edit Post')
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const submitHandler = (e) => {
    const destination = Router.pathname === "/admin/berita" ? "/post" : ("/post/"+slug)
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("description", description);
    formData.append("content", content);
    formData.append("date", date);
    formData.append("image", image);
    fetch(backend + destination, {
      method: Router.pathname === "/admin/berita" ? "POST" : "PUT",
      mode: "cors",
      credentials: "include",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        alert(`Post ${res.message} berhasil dibuat`);
      })
      .catch((err) => {
        alert(`Error ${err.message}`);
      });
    setTitle("");
    setSlug("");
    setDescription("");
    setContent("");
    setDate(new Date());
    setImage(null);
    Router.replace(Router.asPath);
  };

  if (isOpen) {
    return (
      <div>
        <button
          className="px-4 py-2 font-medium tracking-wide text-primary transition-colors duration-200 transform bg-secondary rounded-md focus:outline-none"
          onClick={handleClick}
        >
          {pageChecker()}
        </button>
        <form
          id="postData"
          encType="multipart/form-data"
          className="bg-secondary p-4 my-4 mx-0 rounded-lg "
          onSubmit={submitHandler}
        >
          <div className="grid grid-cols-3 py-2">
            <label className="block text-lg text-primary">Post title</label>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="p-1 col-span-2 bg-white focus:outline-none flex-1 block w-full rounded-md sm:text-sm border-2 border-opacity-5"
              required={true}
              value={title}
            ></input>
          </div>
          <div className="grid grid-cols-3 py-2">
            <label className="block text-lg text-primary">Post slug</label>
            <input
              onChange={(e) => {
                setSlug(e.target.value);
              }}
              id="slug"
              className="p-1 col-span-2 bg-white focus:outline-none flex-1 block w-full rounded-md sm:text-sm border-2 border-opacity-5"
              required={true}
              placeholder="Berisi ekor link berita setelah dipost"
              value={slug}
            ></input>
          </div>
          <div className="grid grid-cols-3 py-2">
            <label className="block text-lg pr-4 text-primary">
              Post description
            </label>
            <input
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="p-1 col-span-2 bg-white focus:outline-none flex-1 block w-full rounded-md sm:text-sm border-2 border-opacity-5"
              required={true}
              value={description}
            ></input>
          </div>
          <div className="grid grid-cols-3 py-2 grid-rows-5">
            <label className="block text-lg text-primary">Post content</label>
            <textarea
              onChange={(e) => {
                setContent(e.target.value);
              }}
              className="p-1 col-span-2 bg-white focus:outline-none flex-1 block w-full rounded-md sm:text-sm border-2 border-opacity-5 row-span-5"
              required={true}
              value={content}
            ></textarea>
          </div>
          <div className="grid grid-cols-3 py-2">
            <label className="block text-lg text-primary">
              Post release date
            </label>
            <input
              type="date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
              className="p-1 col-span-2 bg-white focus:outline-none flex-1 block w-full rounded-md sm:text-sm border-2 border-opacity-5"
              required={true}
              value={date}
            ></input>
          </div>
          <div className="grid grid-cols-3 py-2">
            <label className="block text-lg text-primary">Post Image</label>
            <input
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              id="fileInput"
              type="file"
              accept="image/jpg, image/png"
              alt="Upload image"
              required={true}
              key={image}
            ></input>
          </div>
          <button className="px-4 py-2 font-medium tracking-wide text-primary capitalize transition-colors duration-200 transform border-2 rounded-md focus:outline-none">
            Upload
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <button
          className="px-4 py-2 font-medium tracking-wide text-primary transition-colors duration-200 transform bg-secondary rounded-md focus:outline-none"
          onClick={handleClick}
        >
          {pageChecker()}
        </button>
      </div>
    );
  }
}

export default PostForm;
