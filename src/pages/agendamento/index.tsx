import { useState } from 'react';

const Schedule = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Lógica de agendamento aqui
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='date'>
        <label htmlFor="date">Data:</label>
        <input type="date" id="date" value={date} onChange={handleDateChange} />
      </div>
      <div>
        <label htmlFor="time">Hora:</label>
        <input type="time" id="time" value={time} onChange={handleTimeChange} />
      </div>
      <button type="submit">Agendar</button>
    </form>
  );
};

export default Schedule;
