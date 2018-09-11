const { expect } = require('chai');

describe('index.js', ()=>{
    describe('#getCorrectIpAddress', ()=> {
        context('When the FORCE_LOCAL_IP env var exists',()=>{
            beforeEach(()=>{
                process.env.FORCE_LOCAL_IP = 'true';
            })
            it('should return the ip address', ()=>{
                const {getCorrectIpAddress } = require('../index')

                const myPresetIpAddress = '0.0.0.0';
                const expected = require('ip').address();

                const result = getCorrectIpAddress(myPresetIpAddress);

                expect(result).to.be.equal(expected);
            });

            afterEach(()=> {
                delete process.env.FORCE_LOCAL_IP;
            })

        });

        context('When the FORCE_LOCAL_IP env var do NOT exists',()=>{
            it("should return the same value passed as argument", ()=>{
                const {getCorrectIpAddress } = require('../index')

                const myPresetIpAddress = '0.0.0.0';

                const result = getCorrectIpAddress(myPresetIpAddress);

                expect(result).to.be.equal(myPresetIpAddress);
            });
        });
    });
});