import React, { PropTypes } from 'react';
import { compose } from 'redux';

import Link from 'amo/components/Link';
import translate from 'core/i18n/translate';

import 'amo/css/Home.scss';

export class HomePageBase extends React.Component {
  static propTypes = {
    i18n: PropTypes.object.isRequired,
  }

  render() {
    const { i18n } = this.props;
    return (
      <div className="HomePage">
        <h2 className="HomePage-subheading">{i18n.gettext('What do you want Firefox to do?')}</h2>
        <ul className="HomePage-cat-list">
          <li className="HomePage-cat-li HomePage-block-ads">
            <Link to="#block-ads"><span>{i18n.gettext('Block ads')}</span></Link>
          </li>
          <li className="HomePage-cat-li HomePage-screenshot">
            <Link to="#screenshot"><span>{i18n.gettext('Screenshot')}</span></Link>
          </li>
          <li className="HomePage-cat-li HomePage-save-stuff">
            <Link to="#save-stuff"><span>{i18n.gettext('Save stuff')}</span></Link>
          </li>
          <li className="HomePage-cat-li HomePage-shop-online">
            <Link to="#shop-online"><span>{i18n.gettext('Shop online')}</span></Link>
          </li>
          <li className="HomePage-cat-li HomePage-be-social">
            <Link to="#share-stuff"><span>{i18n.gettext('Be social')}</span></Link>
          </li>
          <li className="HomePage-cat-li HomePage-share-stuff">
            <Link to="#share-stuff"><span>{i18n.gettext('Share stuff')}</span></Link>
          </li>
        </ul>
        <Link className="HomePage-extensions-link" to="/extensions/">
          {i18n.gettext('Browse all extensions')}
        </Link>

        <h2 className="HomePage-subheading">{i18n.gettext('How do you want Firefox to look?')}</h2>
        <ul className="HomePage-cat-list">
          <li className="HomePage-cat-li HomePage-wild">
            <Link to="#wild"><span>{i18n.gettext('Wild')}</span></Link>
          </li>
          <li className="HomePage-cat-li HomePage-abstract">
            <Link to="#abstract"><span>{i18n.gettext('Abstract')}</span></Link>
          </li>
          <li className="HomePage-cat-li HomePage-fashionable">
            <Link to="#fashionable"><span>{i18n.gettext('Fashionable')}</span></Link>
          </li>
          <li className="HomePage-cat-li HomePage-scenic">
            <Link to="#scenic"><span>{i18n.gettext('Scenic')}</span></Link>
          </li>
          <li className="HomePage-cat-li HomePage-sporty">
            <Link to="#sporty"><span>{i18n.gettext('Sporty')}</span></Link>
          </li>
          <li className="HomePage-cat-li HomePage-mystical">
            <Link to="#mystical"><span>{i18n.gettext('Mystical')}</span></Link>
          </li>
        </ul>
        <Link className="HomePage-themes-link" to="/themes/">
          {i18n.gettext('Browse all themes')}
        </Link>
      </div>
    );
  }
}

export default compose(
  translate({ withRef: true }),
)(HomePageBase);
