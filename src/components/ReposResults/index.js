import { Card } from "semantic-ui-react";
import PropTypes from "prop-types";

export default function ReposResults({ repositories }) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <Card.Group itemsPerRow={3} stackable>
      {repositories.map((repository) => (
        <Card
          key={repository.id}
          image={repository.owner.avatar_url}
          header={repository.name}
          meta={repository.owner.login}
          description={truncate(repository.description, 50)}
          href={repository.html_url}
        />
      ))}
    </Card.Group>
  );
}

ReposResults.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      html_url: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};
