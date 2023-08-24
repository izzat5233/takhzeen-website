import React from 'react';
import onClickOutside from 'react-onclickoutside';

function DropdownMenu({toggle, children}) {
    DropdownMenu.handleClickOutside = () => toggle(false);

    return (
        <div className="
            scale-up-center absolute right-0
            flex flex-col justify-end gap-6
            justify-items-end text-center w-fit text-xl
            bg-back border-strong border-2 rounded-xl
            p-8 top-5 sm:top-10 mt-4 min-w-210
            drop-shadow-lg
        ">
            {children}
        </div>
    );
}

const clickOutsideConfig = {
    handleClickOutside: () => DropdownMenu.handleClickOutside,
};

export default onClickOutside(DropdownMenu, clickOutsideConfig);
