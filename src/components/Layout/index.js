import React from 'react';

import Search from "../../views/Search/Search";

const Layout = ({children}) => {

    return (<>
            <Search/>
        {children}
    </>
)
    ;
};

export default Layout;