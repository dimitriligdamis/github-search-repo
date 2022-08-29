import {
  Form, FormField, Search, Segment,
} from 'semantic-ui-react';

export default function SearchBar() {
  return (
    <Segment>
      <Form>
        <FormField>
          <Search fluid input={{ icon: 'search', iconPosition: 'left' }} />
        </FormField>
      </Form>
    </Segment>
  );
}
