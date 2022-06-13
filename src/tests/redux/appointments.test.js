import store from '../../redux/store';
import { fetchAppointments, deleteAppointment } from '../../redux/appointments';

const mockData = {
  appointments: [{
    id: 2,
    city: 'madrid',
    date: '2022-06-29',
    user_id: 1,
    billionaire_id: 6,
    created_at: '2022-06-11T12:45:42.452Z',
    updated_at: '2022-06-11T12:45:42.452Z',
  }],
};

const response = (url) => {
  if (url.includes('appointments')) return mockData.appointments;
  return null;
};

global.fetch = (url) => Promise.resolve({
  ok: true,
  json: () => Promise.resolve(
    response(url),
  ),
});

describe('redux appointments', () => {
  test('fetch appointments', async () => {
    await store.dispatch(fetchAppointments({}));
    const { appointments } = store.getState();
    expect(appointments.all.length).toBe(1);
  });

  test('delete appointment', async () => {
    await store.dispatch(deleteAppointment({ id: 2, user: {} }));
    const { appointments } = store.getState();
    expect(appointments.all.length).toBe(0);
  });
});
