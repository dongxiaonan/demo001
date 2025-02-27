import { render, screen } from '@testing-library/react';
import App from './App';
import PageHeader from './components/PageHeader';
import FilterBars from './components/FilterBars';
import { tags, items } from './data';
import ImageContent from './components/ImageContent';


test('renders App', () => {
  render(<App />);
  const pageTitle = screen.getByText(/Image Gallery/i);
  expect(pageTitle).toBeInTheDocument();

  const tag = screen.getByText(tags[0].name);
  expect(tag).toBeInTheDocument();

  const itemName = screen.getByText(items[0].title);
  expect(itemName).toBeInTheDocument();
});

test('renders PageHeader', () => {
  render(<PageHeader />);
  const pageTitle = screen.getByText(/Image Gallery/i);
  expect(pageTitle).toBeInTheDocument();

  const button = screen.getByText(/Add New/i);
  expect(button).toBeInTheDocument();
});


test('renders FilterBars', () => {
  render(<FilterBars />);

  tags.forEach((tag) => {
    const title = screen.getByText(tag.name);
    expect(title).toBeInTheDocument();
  })
});

test('renders ImageContent', () => {
  render(<ImageContent />);

  items.forEach((item) => {
    const title = screen.getByText(item.title);
    expect(title).toBeInTheDocument();

    const description = screen.getByText(item.description);
    expect(description).toBeInTheDocument();

    const tagTitle = tags.find(tag => tag.id === item.tag).name;
    const tag = screen.getByText(`Tag: ${tagTitle}`);
    expect(tag).toBeInTheDocument();
  })
});
