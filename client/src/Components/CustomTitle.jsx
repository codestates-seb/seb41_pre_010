const defaultImage = "";
const defaultDescription = "";

export default function CustomHead({
  author,
  title,
  description,
  image,
  noIndex,
}) {
  return (
    <>
      <title>{title}</title>
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
    </>
  );
}
