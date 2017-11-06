import * as React from 'react';

export interface Props {
    children: JSX.Element[]
}
export interface State {
    active: number
    length: number
}

export default class Hoverable extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            active: 0,
            length: React.Children.count(props.children)
        }
    }
    public componentWillReceiveProps(nextProps: Props) {
        this.setState({
            active: 0,
            length: React.Children.count(nextProps.children)
        })
    }

    private onMouseEnter = () => {
        let { active, length } = this.state;
        this.setState({
            active: (active + 1) % length
        })
    }
    private onMouseLeave = () => {
        let { active, length } = this.state;
        this.setState({
            active: (active - 1) % length
        })
    }
    render() {
        return React.cloneElement(this.props.children[this.state.active], {
            "onMouseEnter": this.onMouseEnter,
            "onMouseLeave": this.onMouseLeave,
        })
    }
}
