import { ErrorPage } from './error-page';

export const Error500 = () => {
  return (
    <ErrorPage
      errorCode="500"
      title="Server Error"
      message="Something went wrong on our end. Our digital forensics team is investigating the scene. Please try again in a moment!"
    />
  );
};