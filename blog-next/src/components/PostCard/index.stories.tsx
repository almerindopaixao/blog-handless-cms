import { Story, Meta } from '@storybook/react/types-6-0';
import PostCard, { PostCardProps } from '.';

export default {
  title: 'PostCard',
  component: PostCard,
} as Meta;

const Template: Story<PostCardProps> = (args) => <PostCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  slug: 'default-slug',
  title: 'default-cover',
  cover:
    'https://andrebtoe.files.wordpress.com/2016/05/positronx-banner-1152-1.jpg?w=816',
};

export const Secondary = Template.bind({});
Secondary.args = {
  slug: 'default-slug',
  title: 'aaai',
};
