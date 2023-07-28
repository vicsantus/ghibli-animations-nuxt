import { mount } from '@vue/test-utils';
import IndexPage from '@/pages/index.vue';

describe('IndexPage', () => {
  it('renders the title "Films"', () => {
    const wrapper = mount(IndexPage);
    expect(wrapper.text()).toContain('Films');
  });

  it('renders the RenderFilms component', () => {
    const wrapper = mount(IndexPage);
    expect(wrapper.findComponent({ name: 'RenderFilms' }).exists()).toBe(true);
  });

  it('renders the TheHeader component', () => {
    const wrapper = mount(IndexPage);
    expect(wrapper.findComponent({ name: 'TheHeader' }).exists()).toBe(true);
  });

  it('renders the RenderFilms component with fetched data', async () => {
    const mockData = { films: [{ title: 'Film 1' }, { title: 'Film 2' }] };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const wrapper = mount(IndexPage);

    await wrapper.vm.$nextTick();

    const renderedFilms = wrapper.findAll('.film-item');
    expect(renderedFilms).toHaveLength(mockData.films.length);

  });
});
