const Article = ({ title, text, tags, image, alt }) => {
  return (
    <div className="alura-card">
      <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">
        {title}
      </h3>
      <div className="w-full justify-end gap-2 pr-5 hidden sm:flex">
        {tags.map((tag, index) => (
          <span key={tag} className="alura-tags">
            {tag}
          </span>
        ))}
      </div>
      <div className="grid gap-1">
        {text.map((content, index) => (
          <p key={index} className="text-alura-200 dark:text-gray-400">
            {content}
          </p>
        ))}
      </div>
      {image && <img src={image} alt={alt} className="mt-5" />}
      {image && alt && <span className="sr-only">{alt}</span>}
    </div>
  );
};

export default Article;
