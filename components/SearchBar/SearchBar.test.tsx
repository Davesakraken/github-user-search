import { render } from '@/test-utils';
import SearchBar from '@/components/SearchBar/SearchBar';

describe('SearchBar component', () => {
  it('renders without crashing', () => {
    render(<SearchBar />);

    expect(() => {
      render(<SearchBar />);
    }).not.toThrow();
  });
});
