import React from 'react';
import onClickOutside from 'react-onclickoutside';

function Focusable({setToggled, ...rest}) {
    Focusable.handleClickOutside = () => setToggled(false);
    return <div {...rest}/>;
}

export default onClickOutside(Focusable, {
    handleClickOutside: () => Focusable.handleClickOutside,
});
