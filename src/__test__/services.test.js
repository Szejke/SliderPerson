import { getPersonApi } from 'services/persons';

describe(' Tests API', () => {
  it('Test connect', async () => {
    const data = await getPersonApi();
    expect(data);
    expect(getPersonApi()).toHaveBeenCalledTimes(1);
  });
});
