import { ReactComponent as LOGOIMG } from 'assets/image/common/craft-full-black.svg';
import { LogoPropsType } from 'components/common/logo/type';

const Logo: React.FC<LogoPropsType> = (props) => {
  return (
    <div className='Logo'>
      <a href='#'>
        <LOGOIMG fill={props.fill && props.fill} />
      </a>
    </div>
  );
};

export default Logo;
