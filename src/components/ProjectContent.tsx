// "use client";

// import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

// type ProjectContentProps = {
//   source: MDXRemoteSerializeResult;
// };

// // 這裡可以加客製化的 MDX 元件
// const components = {
//   h1: (props: any) => (
//     <h1 {...props} className="text-4xl font-bold mt-6 mb-4" />
//   ),
//   h2: (props: any) => (
//     <h2 {...props} className="text-2xl font-semibold mt-5 mb-3" />
//   ),
//   p: (props: any) => (
//     <p {...props} className="text-lg font-light leading-relaxed mb-4" />
//   ),
//   a: (props: any) => (
//     <a
//       {...props}
//       className="text-black hover:underline"
//     />
//   ),
//   img: (props: any) => (
//   <img
//       {...props}
//       className="w-full max-w-none shadow-lg my-8"
//       alt={props.alt || ""}
//   />
// )
// };

// export default function ProjectContent({ source }: { source: MDXRemoteSerializeResult }) {
//   return (
//     <div className="prose max-w-none">
//       <MDXRemote {...source} components={components} />
//     </div>
//   );
// }

"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

type ProjectContentProps = {
  source: MDXRemoteSerializeResult;
};

// 自訂 MDX 元件
const components = {
  h1: (props: any) => (
    <h1 {...props} className="text-4xl font-normal mt-6 mb-4 shadow-none max-w-3xl mx-left" />
  ),
  h2: (props: any) => (
    <h2 {...props} className="text-2xl font-normal mt-5 mb-3 shadow-none max-w-3xl mx-left" />
  ),
  p: (props: any) => (
    <p {...props} className="text-lg font-light leading-relaxed mb-4 shadow-none max-w-3xl mx-left" />
  ),
  a: (props: any) => (
    <a {...props} className="text-black hover:underline shadow-none max-w-3xl mx-left" />
  ),
  img: (props: any) => (
    <img
      {...props}
      className="w-screen max-w-[80vw] my-8 shadow-lg object-contain relative"
      alt={props.alt || ""}
    />
  ),
};

// export default function ProjectContent({
//   source,
// }: {
//   source: MDXRemoteSerializeResult;
// }) {
//   return (
//     <div className="prose max-w-none">
//       <MDXRemote {...source} components={components} />
//     </div>
//   );
// }

export default function ProjectContent({ source }: { source: MDXRemoteSerializeResult }) {
  return (
    <div className="w-screen max-w-[80vw] my-8 object-contain relative left-1/2 -translate-x-1/2">
      <MDXRemote {...source} components={components} />
    </div>
  );
}


