export default function Ad({ isShow }) {
  const banner = <img src='/images/banner.svg' alt='배너' />;
  return isShow ? banner : null;
}
