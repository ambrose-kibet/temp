import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <main className="main">
      <section className="error-page">
        <div className="error-container">
          <h1>Error 404</h1>
          <h4> Sorry the page you tried cannot be found!</h4>
          <Link to={'/'} className="btn error-btn">
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
