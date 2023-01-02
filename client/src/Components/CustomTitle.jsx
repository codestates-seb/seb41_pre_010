import { useState, useEffect } from "react";
const defaultImage =
  "https://stackoverflows3.s3.ap-northeast-2.amazonaws.com/1672364664612.png";
const defaultDescription = "개발자가 배우고, 공유하고, 경력을 쌓는 곳";

export default function CustomTitle({
  author,
  title,
  description,
  image,
  noIndex,
}) {
  const [mountTitle, setMountTitle] = useState(title);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  useEffect(updateTitle, [mountTitle, title]);

  return (
    <>
      <header>
        <meta name="description" content={description || defaultDescription} />
        {author && <meta name="author" content={author} />}
        <meta itemProp="name" content={title} />
        <meta
          itemProp="description"
          content={description || defaultDescription}
        />
        <meta itemProp="image" content={image || defaultImage} />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content={description || defaultDescription}
        />
        <meta name="twitter:image" content={image || defaultImage} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={description || defaultDescription}
        />
        <meta property="og:image" content={image || defaultImage} />
        {noIndex && <meta name="robots" content="noindex" />}
      </header>
    </>
  );
}
