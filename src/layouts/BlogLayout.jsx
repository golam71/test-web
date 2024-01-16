// BlogLayout.jsx

import { NavBar } from "../solid/Navbar.jsx";

const BlogLayout = ({ title, metaImage, metaData, link, children }) => {
  const imageUrl = metaImage || "https://salam.app/image.png";

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta content="width=device-width" name="viewport" />
        <link href="/favicon.ico" rel="icon" type="image/svg+xml" />

        <title>{title}</title>

        {/* HTML Meta Tags */}
        <meta name="description" content={metaData || "Default description"} />

        {/* Normal Meta Tags */}
        <meta property="og:url" content={link || "https://salam.app"} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={metaData || "Default description"}
        />
        <meta property="og:image" content={imageUrl} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="salam.app" />
        <meta property="twitter:url" content={link || "https://salam.app"} />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content={metaData || "Default description"}
        />
        <meta name="twitter:image" content={imageUrl} />
      </head>
      <body className="bg-smoke-400">
        <NavBar client:load />

        {/* Custom content here */}
        <div className="w-full flex justify-center">
          <div className="prose lg:prose-base sm:prose-xl xl:prose-2xl prose-blockquote:font-serif  prose-a:text-indigo-300 prose-a:underline align-middle prose-invert p-5 pt-16  sm:p-20  ">
            <div class="prose-img:rounded-2xl sm:prose-img:w-1/2 sm:prose-img:mx-auto  prose-h1:text-aquamarine-500 ">
              {children}
            </div>
          </div>
        </div>
        {/* Custom content ends here */}
      </body>
    </html>
  );
};

export default BlogLayout;
