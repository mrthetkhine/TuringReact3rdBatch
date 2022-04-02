import React,{ Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

class LazyDemo extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            load : false
        };
        this.loadComponent = this.loadComponent.bind(this);
    }
    loadComponent()
    {
        this.setState({
            load: true
        })
    }
    render() {
        const DynamicallyLoadedComponent = React.lazy(() => import('./DynamicallyLoadedComponent'));
        return (<div>
                <form>
                    Lazy Demo
                    {
                        this.state.load &&
                        <ErrorBoundary>
                            {/*
                                <Suspense fallback={'<div>Loading component ...</div>'}>*/
                                    <DynamicallyLoadedComponent/>
                                    /* </Suspense>*/
                            }
                        </ErrorBoundary>


                    }
                    <button
                        type={"button"}
                        className={"btn btn-primary"}
                        onClick={this.loadComponent}
                    > Load</button>
                </form>

        </div>);
    }
}
export default LazyDemo;