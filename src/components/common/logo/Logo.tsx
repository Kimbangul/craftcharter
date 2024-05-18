import { ReactComponent as LOGOIMG } from 'assets/image/common/craft-full-black.svg';
import { LogoPropsType } from 'components/common/logo/type';
import { Link } from 'react-router-dom';

const Logo: React.FC<LogoPropsType> = (props) => {
  return (
    <div className='Logo'>
      <Link to='/'>
        <LOGOIMG fill={props.fill && props.fill} />
      </Link>
    </div>
  );
};

export default Logo;
