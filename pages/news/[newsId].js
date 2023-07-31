import { useRouter } from "next/router";

// our-domain.com/news/dynamic page

function DetailsPage() {

  const router = useRouter();

  router.query.newsId
  console.log(router.query.newsId);

  return <h1>The Details Page!</h1>;

}

export default DetailsPage;
