import { LogoContainer } from './LogoContainer';
import { LOGO_DEFAULT_HEIGHT, LOGO_DEFAULT_WIDTH } from './CONSTANTS';
import logoIconPath from 'assets/logos/logo-300x100.svg';

export default function LogoIcon({ height = LOGO_DEFAULT_HEIGHT, width = LOGO_DEFAULT_WIDTH }) {
    return <LogoContainer url={logoIconPath} width={width} height={height} />;
}
