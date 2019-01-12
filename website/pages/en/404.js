/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

class Help extends React.Component {
  render() {
    const language = this.props.language || '';
    const supportLinks = [
      {
        content: `Return to the [homepage](${siteConfig.baseUrl})`,
        title: 'Go Home',
      },
      {
        content: `Go to the [help](${siteConfig.baseUrl}${siteConfig.help}) page if you are lost and want to look for assistance`,
        title: 'Get Help',
      },
      {
        content: `The [Get Started documentation](${docUrl('get-started', language)}) is a great place to go to start discovering this site`,
        title: 'Check Out The Start Guide',
      },
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Page Not Found</h1>
            </header>
            <p>The requested webpage is not found, try one of these solutions:</p>
            <GridBlock contents={supportLinks} layout="threeColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Help;
