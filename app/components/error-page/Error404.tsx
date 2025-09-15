import { ErrorPage } from './error-page';

export const Error404 = () => {
  return (
    <ErrorPage
      errorCode="404"
      title="Page Not Found"
      message="The page you're looking for seems to have wandered off into the digital wilderness. Don't worry, it happens to the best of us!"
    />
  );
};