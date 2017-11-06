/// <reference types="react" />
import * as React from 'react';
export interface Props {
    children: JSX.Element[];
}
export interface State {
    active: number;
    length: number;
}
export default class Hoverable extends React.Component<Props, State> {
    constructor(props: Props);
    componentWillReceiveProps(nextProps: Props): void;
    private onMouseEnter;
    private onMouseLeave;
    render(): React.ReactElement<any>;
}
