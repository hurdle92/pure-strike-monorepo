import dynamic from "next/dynamic";

const Error404 = dynamic(() => import("src/components/error/404/Error404"), {
  ssr: false,
});

export default Error404;
