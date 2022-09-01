import PropTypes from 'prop-types';

import {
  Form, FormField, Search, Segment,
} from 'semantic-ui-react';

export default function SearchBar({ inputValue, setInputValue, setSearch }) {
  return (
    <Segment>
      <Form onSubmit={() => {
        setSearch(inputValue);
        setInputValue('');
      }}
      >
        <FormField>
          <Search
            open={false}
            fluid
            input={{ icon: 'search', iconPosition: 'left' }}
            value={inputValue}
            onSearchChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
        </FormField>
      </Form>
    </Segment>
  );
}

SearchBar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,

};
