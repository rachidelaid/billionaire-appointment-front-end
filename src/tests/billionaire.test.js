import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Wrapper from './helpers/test_wrapper';
import Billionare from '../components/Billionare';
/* eslint-disable no-unused-expressions */

describe('billionaire', () => {
  const item = {
    id: 1,
    name: 'name',
    title: 'title',
    username: 'username',
    price: 0,
    image: '',
  };
  const billionaire = <Wrapper><Billionare item={item} /></Wrapper>;
  beforeEach(() => {
    render(billionaire);
  });
  it('should have a title', () => {
    const textNode = screen.getByText('title');
    expect(textNode).toBeInTheDocument;
  });
  it('should have a name', () => {
    const textNode = screen.getByText('name');
    expect(textNode).toBeInTheDocument;
  });
  it('should navigate to the speakers page when clicked', () => {
    const component = screen.queryByText('name');
    component.click();

    expect(/Bio/i).toBeInTheDocument;
  });
});
