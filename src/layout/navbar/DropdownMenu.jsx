import React from 'react';
import onClickOutside from 'react-onclickoutside';

function DropdownMenu({setToggled, ...rest}) {
    DropdownMenu.handleClickOutside = () => setToggled(false);
    return <div {...rest}/>;
}

export default onClickOutside(DropdownMenu, {
    handleClickOutside: () => DropdownMenu.handleClickOutside,
});
