
const { assert } = require('chai');
const CircusTour = require('../../lib/models/circusTour');

describe('Circus Tour', () => {


    it('valid model check', () => {
        const data = {
            title: 'Portland Magical Tour',
            activities: ['beardedLady', 'swordSwallower', 'fireBreather'],
            launchDate: new Date(),
            stops: [{
                location: {
                    city: 'Portland',
                    state: 'Oregon',
                    zip: 97408
                }
            }],
            weather: [{
            //see demo and choose fields;
            }],
            attendance: {
                type: 575,
                min: 1,
            }
        };

        const circusTour = new CircusTour(data);
        data._id = circusTour._id;
        data.stops[0]._id = circusTour.stops[0]._id;

        assert.deepEqual(circusTour.toJSON(), data);

    });

    
});