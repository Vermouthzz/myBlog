import { CommonUser } from "../components/common-user";

export default function BolgPage() {
  return (
    <div>
      <div className="h-60">
        <span>go back</span>
      </div>
      <div>
        <div className="max-w-4xl mx-auto">
          <BlogTop></BlogTop>
          <div className="mt-5"></div>
        </div>
      </div>
    </div>
  );
}

function BlogTop() {
  return (
    <div className="flex flex-col justify-start">
      <span className="text-sm">Thursday, September 12, 2024</span>
      <h3 className="font-extrabold text-2xl my-4">
        Radiant: A beautiful new marketing site template
      </h3>
      <CommonUser></CommonUser>
    </div>
  );
}
