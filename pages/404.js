import Switch from "../components/switch";
import SmallIntro from "../components/small_intro";

export default function Custom404() {
  return <main>
  <Switch />
  <SmallIntro title='Not Found' />
  <article className="wrapper" data-style="secondary">
    <section style={{ paddingTop: '36px' }}>
      <p>Sorry, there is nothing at this URL.</p>
      <h3>I know that being lost is hard.</h3>
      <p>Unfortunately, I have no guess about what could be under this URL but maybe these links below can help you?
        <br/>
        Have a nice day!</p>
      <ul>
        <li>you can visit <a href="/">my homepage</a> to reach my links.</li>
        <li>you can visit <a href="/posts">my blog page</a> to reach my posts.</li>
      </ul>
    </section>
  </article>
  <footer style={{ height: 'auto', paddingBottom: '1rem' }}>
    <p style={{ fontSize: 16, paddingTop: 8 }}>Thanks for visiting my website!</p>
    <p>© 2020 Kerem Sevencan. made in Berlin with love.</p>
    <div style={{ fontSize: 24 }}>🦁</div>
  </footer>
</main>
}