import { LogoContainer } from './LogoContainer';
import { LOGO_ICON_DEFAULT_HEIGHT, LOGO_ICON_DEFAULT_WIDTH } from './CONSTANTS';
import logoIconPath from 'assets/logos/logo-icon-192x192.svg';

export default function LogoIcon({
    height = LOGO_ICON_DEFAULT_HEIGHT,
    width = LOGO_ICON_DEFAULT_WIDTH
}) {
    return <LogoContainer url={logoIconPath} width={width} height={height} />;
}
