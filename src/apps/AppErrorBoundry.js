import React, { Component } from 'react';
import styled from 'styled-components';

export const ErrorContainer = styled.div`
    border: 1px solid red;
    padding: 0.5rem;
`

class AppErrorBoundary extends Component {
    state = { hasError: false, errorDetails: null };

    static getDerivedStateFromError(error) {
        return { hasError: true, errorDetails: error };
    }

    render() {
        const { hasError, errorDetails } = this.state;

        if (hasError) {
            return (
                <ErrorContainer>
                    {errorDetails.toString()}
                </ErrorContainer>
            );
        }

        return this.props.children;
    }
}

export default AppErrorBoundary;
