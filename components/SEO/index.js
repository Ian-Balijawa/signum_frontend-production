import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const SEO = ({
  description = 'Signum Advocates',
  keywords = 'Signum Advocates, law firm, Practice areas, Divorce, SEO, Uganda, Lawyers in Uganda, appeals, trademark, estate planning, legal solutions, consultancy, firms near me, litigation',
  title = 'Signum Advocates',
  websiteUrl = 'https://signumadvocates.com',
  imageUrl = 'https://drive.google.com/uc?export=view&id=1U1fHGIPFmFZrvFnfazP9CEhUnHlOB1WI',
  // twitterImgUrl = "https://drive.google.com/uc?export=view&id=1hHDnyLXk7bHtNiSLA3o1WRu6GsbChK3n",
  imageAlt = 'Signum Advocates caters for all your legal needs.',
  imageWidth = '1280',
  imageHeight = '630',
  imageType = 'image/png',
}) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta
        property="og:image:url"
        content={imageUrl.replace('https', 'http')}
      />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta property="og:image:type" content={imageType}></meta>
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:site" content="@signumadvocates" />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content={twitterImgUrl} /> */}
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Deal with duplicate content */}
      <link rel="canonical" href={websiteUrl}></link>
      <link
        rel="shortcut icon"
        // href="https://www.buriafrica.com/assets/favicons/favicon.ico"
        href="https://drive.google.com/uc?export=view&id=1VUqOFOvvfck5gVmKjBuett9Hs8qDuVfr"
      />
      <link
        rel="icon"
        // href="https://www.buriafrica.com/assets/favicons/favicon.ico"
        href="https://drive.google.com/uc?export=view&id=1VUqOFOvvfck5gVmKjBuett9Hs8qDuVfr"
        type="image/x-icon"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://drive.google.com/uc?export=view&id=1CbuYpHI9gFNdtj7TbH1YP7ChizBhmkRf"
        // href="https://www.buriafrica.com/assets/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        // href="https://www.buriafrica.com/assets/favicons/favicon-32x32.png"
        href="https://drive.google.com/uc?export=view&id=1Km_LpcITV0cwnlQi5bMP-atM4Dt2dAdc"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        // href="https://www.buriafrica.com/assets/favicons/favicon-16x16.png"
        href="https://drive.google.com/uc?export=view&id=1Rtzn5SNLknPGsjwSx1MnW4Lr3AMeNXnH"
      />
    </Head>
  );
};

export default SEO;
