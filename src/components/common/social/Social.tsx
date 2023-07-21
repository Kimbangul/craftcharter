import { socialMenu } from 'components/common/social/menu';

export const Social = () => {
  return (
    <ul className='Social'>
      {socialMenu.map((el) => {
        return (
          <li className='Social-item'>
            <a href={el.link}>
              <>
                <span className='sound-only'>{el.title}</span>
                {<el.icon />}
              </>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export const Credit = () => {
  return (
    <a className='Credit' href='#'>
      <span>Website credits</span>
      <span>Crafted by Ryze</span>
    </a>
  );
};
