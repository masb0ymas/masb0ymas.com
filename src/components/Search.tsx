import "~/styles/search.css";

import Fuse from "fuse.js";
import { useState } from "react";

// Configs fuse.js
// https://fusejs.io/api/options.html
const options = {
  keys: ["frontmatter.title", "frontmatter.description", "frontmatter.slug"],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.5,
};

function Search({ searchList }: any) {
  // User's input
  const [query, setQuery] = useState("");

  const fuse = new Fuse(searchList, options);

  // Set a limit to the posts: 5
  const posts: any[] = fuse
    .search(query)
    .map((result) => result.item)
    .slice(0, 5);

  return (
    <div className="flex w-full flex-col py-4">
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-slate-700 sr-only dark:text-white"
      >
        Search
      </label>

      <div style={{ position: "relative" }}>
        <div className="icon-search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-search"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx={10} cy={10} r={7}></circle>
            <line x1={21} y1={21} x2={15} y2={15}></line>
          </svg>
        </div>
        <input
          type="text"
          id="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input-search"
          placeholder="Search for anything..."
        />
      </div>

      {query.length > 1 && (
        <div style={{ marginTop: "0.75rem", marginBottom: "0.75rem" }}>
          <u>
            Found {posts.length} {posts.length === 1 ? "result" : "results"} for
            '{query}'
          </u>
        </div>
      )}

      <div>
        {posts &&
          posts.map((post) => {
            const description = post.frontmatter.description;
            const short_description =
              description && description?.length > 170
                ? `${description?.substring(0, 170)}...`
                : description;

            return (
              <div className="grid gap-2 pb-4">
                <a
                  href={`/blog/${post.slug}`}
                  className="unset hover:text-text-link"
                >
                  {post.frontmatter.title}
                </a>
                <p className="text-gray-400 text-sm">{short_description}</p>
                <div className="flex gap-2">
                  {post.frontmatter.tags.map((tag: string[]) => {
                    return (
                      <span className="bg-gradient-to-br from-[#fb923c] via-[#f97316] to-[#ea580c] text-xs font-bold px-2.5 py-0.5 rounded dark:from-primary-main dark:via-primary-main dark:to-primary-main dark:text-gray-800 text-white border-orange-300 dark:border-yellow-300">
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Search;
