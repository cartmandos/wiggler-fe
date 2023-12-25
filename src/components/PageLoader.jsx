import { ReactComponent as LoadingPage } from '@assets/spinners/loading-page.svg';

export default function PageLoader() {
  return (
    <div className="page-load" style={{ display: 'flex', height: '100vh' }}>
      <LoadingPage />
    </div>
  );
}
