import React from 'react';

class Feature {
  constructor(name, value, description, isEnabled) {
    this.name = name;
    this.value = value;
    this.description = description;
    this.isEnabled = isEnabled;
  }
}

const Cechyx = () => {
  const features = [
    new Feature('Pierwszy', 10, 'Moze tak', true),
    new Feature('Drugi', 20, 'moze nie', false),
    new Feature('Trzeci', 30, 'napewno tak', true),
    new Feature('Czwarty', 40, 'napewno nie', false),
  ];

  return (
    <div>
      <h2>Feature List</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <strong>{feature.name}</strong> (Wartosc: {feature.value}) - {feature.description} -{' '}
            {feature.isEnabled ? 'ON' : 'OFF'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cechyx;
