import { Helmet } from 'react-helmet';

const MetaTag = () => {
  return (
    <Helmet>
      <title>Craft</title>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='use-credentials' />
      <link href='https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap' rel='stylesheet' />
    </Helmet>
  );
};

export default MetaTag;
