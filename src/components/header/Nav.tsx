const Nav = () => {
  const menu = [
    {
      title: 'service',
      link: '#',
    },
    {
      title: 'fleet',
      link: '#',
    },
    {
      title: 'safety',
      link: '#',
    },
    {
      title: 'about',
      link: '#',
    },
    {
      title: 'news & press',
      link: '#',
    },
    {
      title: 'contact',
      link: '#',
    },
  ];

  return (
    <div>
      <nav>
        <ul>
          {menu.map((el) => {
            return (
              <li>
                <a href={el.link}>{el.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <ul></ul>
    </div>
  );
};
