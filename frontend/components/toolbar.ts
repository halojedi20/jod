/// <reference path="./components.d.ts" />
/// <reference path="../../typings/index.d.ts" />

import * as React from 'react';

class Toolbar extends React.Component<IToolbarProps, IToolbarState>{

    public state: IToolbarState;

    constructor(props: IToolbarProps){
        super(props);
        this.state = {}
    }

    public componentDidMount(){

    }

    public render(){
        return(
            React.DOM.div(null, "Toolbar")
        );
    }

}

export { Toolbar };
