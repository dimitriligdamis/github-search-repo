import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default function ReposResults({ repositories }) {
  return (
    <Card.Group itemsPerRow={3} stackable>
      {repositories.map((repository) => (
        <Card
          key={repository.id}
          image={repository.owner.avatar_url}
          header={repository.name}
          meta={repository.owner.login}
          description={repository.description}
        />
      ))}
    </Card.Group>
  );
}

ReposResults.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    owner: PropTypes.shape({
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
    }),
  })).isRequired,
};
