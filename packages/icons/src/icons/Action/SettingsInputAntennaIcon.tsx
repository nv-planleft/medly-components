import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SettingsInputAntennaIconSvg from '../../assets/Action/settings_input_antenna_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SettingsInputAntennaIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SettingsInputAntennaIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SettingsInputAntennaIcon.Style = SvgIcon;
SettingsInputAntennaIcon.displayName = 'SettingsInputAntennaIcon';

export default SettingsInputAntennaIcon