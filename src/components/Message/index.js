import PropTypes from 'prop-types';

import { Segment } from 'semantic-ui-react';

export default function Message({ count }) {
  return (
    <Segment>
      <p>La recherche a donné {count} résultats</p>
    </Segment>
  );
}

Message.propTypes = {
  count: PropTypes.number.isRequired,
};
