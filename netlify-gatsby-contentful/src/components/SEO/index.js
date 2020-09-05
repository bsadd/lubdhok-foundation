import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ pageTitle, description, meta, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            image
          }
        }
      }
    `
  );

  const { title, image, author, keywords, siteUrl } = site.siteMetadata;
  const metaDescription = description || site.siteMetadata.description;
  const canonical = pathname ? `${siteUrl}${pathname}` : null;
  const metaImage = `${siteUrl}${image}`;
  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}
      titleTemplate={`%s | ${pageTitle}`}
      link={
        canonical
          ? [
              {
                rel: 'canonical',
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: keywords.join(','),
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: 'og:image',
                  content: metaImage,
                },
                {
                  name: 'twitter:card',
                  content: 'summary_large_image',
                },
              ]
            : [
                {
                  name: 'twitter:card',
                  content: 'summary',
                },
              ]
        )
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  pageTitle: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(PropTypes.object),
  pathname: PropTypes.string,
};

export default SEO;
