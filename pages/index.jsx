import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-center bg-cover bg-kapal">
      <div className="flex flex-col justify-center h-screen items-center justify-items-center">
        <div className="h-auto md:self-start md:w-1/2">
          <Image src="/img/logo.png" width={1080} height={878} />
        </div>
      </div>
    </div>
  );
}
