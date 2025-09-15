import React, { Component, ErrorInfo, ReactNode } from 'react';
import { GeneralError } from './GeneralError';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: (error: Error) => ReactNode;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to your preferred error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
    
    // You can add error reporting service here like:
    // reportError(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      if (this.props.fallback && this.state.error) {
        return this.props.fallback(this.state.error);
      }
      
      return <GeneralError error={this.state.error} />;
    }

    return this.props.children;
  }
}