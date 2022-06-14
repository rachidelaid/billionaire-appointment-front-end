import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Wrapper from '../helpers/test_wrapper';
import DetailsText from '../../components/DetailsText';
/* eslint-disable no-unused-expressions */

describe('billionaire', () => {
  const item = {
    id: 1,
    name: 'name',
    title: 'title',
    username: 'username',
    description: 'description',
    price: 0,
    image: '',
  };
  const billionaireDetails = <Wrapper><DetailsText item={item} /></Wrapper>;
  beforeEach(() => {
    render(billionaireDetails);
  });
  it('should have a title', () => {
    const textNode = screen.getByText('title');
    expect(textNode).toBeInTheDocument;
  });
  it('should have a name', () => {
    const textNode = screen.getByText('name');
    expect(textNode).toBeInTheDocument;
  });
  it('should have a description', () => {
    const textNode = screen.getByText('description');
    expect(textNode).toBeInTheDocument;
  });
});
