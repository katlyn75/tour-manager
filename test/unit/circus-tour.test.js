
const { assert } = require('chai');
const circusTour = require('../../lib/models/circusTour');


describe('Circus Tour', () => {

    let data = {
        title: 'Portland Magical Tour',
        activities: ['Bearded Lady', 'Sword Swallower', 'Fire Breather'],
        launchDate: new Date(),
        },
        stops: []

    };

    it('valid model check', () => {
        
    const circusTour = new CircusTour(data);

    circusTour.data._id = CircusTour._id;
    data.stops[0]._id = circusTour.stops[0]._id;

    assert.deepEqual(circusTour.toJSON(), data);

});

    
