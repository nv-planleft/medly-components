import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BluetoothConnectedIconSvg from '../../assets/Device/bluetooth_connected_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BluetoothConnectedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BluetoothConnectedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BluetoothConnectedIcon.Style = SvgIcon;
BluetoothConnectedIcon.displayName = 'BluetoothConnectedIcon';

export default BluetoothConnectedIcon