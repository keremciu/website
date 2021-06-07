import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import Switch from "../../components/switch";
import SmallIntro from "../../components/small_intro";
import { getPostBySlug, getAllPosts, markdownToHtml } from "../../api";

export default function Post({ post, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return router.isFallback ? (
    <PostTitle>Loading…</PostTitle>
  ) : (
    <main>
      <Switch />
      <SmallIntro title={post.title} date={post.date} />
      <article className="wrapper" data-style="secondary">
        <Head>
          <title>{post.title}</title>
          <meta property="og:image" content={post.ogImage.url} />
        </Head>
        <section style={{ paddingTop: '36px' }}>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </section>
      </article>
      <footer style={{ height: 'auto', paddingBottom: '1rem' }}>
        <p style={{ fontSize: 16, paddingTop: 8 }}>Thanks for reading!</p>
        <p>© 2020 Kerem Sevencan. made in Berlin with love.</p>
        <div style={{ fontSize: 24 }}>🦁</div>
      </footer>
    </main>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
