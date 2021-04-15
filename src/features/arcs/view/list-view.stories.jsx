import { ListView } from './list-view';

export default {
  title: 'ListView',
  component: ListView
};

const Template = args => <ListView {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  arcs: [
    { id: 'a', name: 'teste' },
    { id: 'b', name: 'outro teste' }
  ]
};
