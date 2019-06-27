export default ({ id }) => {
  const script = id => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    return script;
  };

  const dataScript = id => {
    const script = document.createElement('script');
    script.innerHTML = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${id}');`;
    return script;
  };

  document.body.insertBefore(dataScript(id), document.body.childNodes[0]);
  document.body.insertBefore(script(id), document.body.childNodes[0]);
};
