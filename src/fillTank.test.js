'use strict';

describe('fillTank', () => {
  const { fillTank } = require('./fillTank');

  it('should ', () => {});

  // write tests here

  it(`should be declared`, () => {
    expect(fillTank).toBeInstanceOf(Function);
  });

  it(`should return nothing`, () => {
    const customer = {
      money: 3000,
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 8,
      },
    };

    expect(fillTank(customer)).toBeUndefined();
  });

  it(`should ordered full tank if amount is not given`, () => {
    const customer = {
      money: 3000,
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 10,
      },
    };

    fillTank(customer, 5);

    expect(customer).toEqual({
      money: 2850,
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 40,
      },
    });
  });

  it(`should not pour more than tank can accommodate`, () => {
    const customer = {
      money: 3000,
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 10,
      },
    };

    fillTank(customer, 5, 50);

    expect(customer).toEqual({
      money: 2850,
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 40,
      },
    });
  });

  it(`should not fill more than client can pay`, () => {
    const customer = {
      money: 50,
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 10,
      },
    };

    fillTank(customer, 5, 20);

    expect(customer).toEqual({
      money: 0,
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 20,
      },
    });
  });

  it(`should not pour at all if poured amount is less than 2 liters`, () => {
    const customer = {
      money: 3000,
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 8,
      },
    };

    fillTank(customer, 5, 1);

    expect(customer).toEqual({
      money: 3000,
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 8,
      },
    });
  });

  it(`should round the poured amount by discarding
     number to the tenth part`, () => {
    const customer = {
      money: 3000,
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 8,
      },
    };

    fillTank(customer, 5, 4.67);

    expect(customer).toEqual({
      money: 2977,
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 12.6,
      },
    });
  });

  it(`should round the price of the purchased fuel
     the to the nearest hundredth part.`, () => {
    const customer = {
      money: 3000,
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 8,
      },
    };

    fillTank(customer, 5.12, 4.6);

    expect(customer).toEqual({
      money: 2976.45,
      vehicle: {
        maxTankCapacity: 40,
        fuelRemains: 12.6,
      },
    });
  });
});
