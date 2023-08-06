import React from 'react';
import { storiesOf } from '@storybook/react';
import Search from '../component/search/Search'; 

storiesOf('Search', module)
  .add('Default', () => <Search searchText="" onChange={() => {}} />)
  .add('With Text', () => <Search searchText="Hello" onChange={() => {}} />)
  .add('With Placeholder', () => <Search searchText="" onChange={() => {}} placeholder="Search here" />)
  .add('Disabled', () => <Search searchText="" onChange={() => {}} disabled />)
  .add('With Value and Placeholder', () => <Search searchText="Initial value" onChange={() => {}} placeholder="Search here" />);
