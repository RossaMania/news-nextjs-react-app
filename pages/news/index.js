// our-domain.com/news

import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page!</h1>
      <ul>
        <li>
          <Link href="/news/something">
            Something!
          </Link>
        </li>
        <li>
          <Link href="/news/something-else">
            Something else!
          </Link>
        </li>
        <li>
          <Link href="/news/something-else-again">
            Something else again!
          </Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;