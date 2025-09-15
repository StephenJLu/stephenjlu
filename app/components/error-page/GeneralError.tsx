import React from 'react';
import { ErrorPage } from './error-page';

interface GeneralErrorProps {
  error?: Error;
  errorCode?: string;
  title?: string;
  message?: string;
}

export const GeneralError: React.FC<GeneralErrorProps> = ({
  error,
  errorCode = "Error",
  title = "Something went wrong",
  message = "An unexpected error occurred. We're working to fix this issue."
}) => {
  // In development, you might want to show more detailed error info
  const isDevelopment = process.env.NODE_ENV === 'development';
  const errorMessage = isDevelopment && error 
    ? `${message} (${error.message})`
    : message;

  return (
    <ErrorPage
      errorCode={errorCode}
      title={title}
      message={errorMessage}
    />
  );
};