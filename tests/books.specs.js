import request from 'request-promise';
import integrationServer from '../utils/integration-server';
import chai from 'chai';

const expect = chai.expect;

describe('Books Integration', () => {
    let app;

    before((done) => {
        app = integrationServer.start(done);
    });

    after((done) => {
        integrationServer.stop(app, done);
    });

    it('Should return books with Authors', () => {
        const query = `
      {
        books {
          title
          year
          pages
          author {
            id
          }
        }
      }
    `;

        const expected = {
            "books": [{
                    "title": "Sita Warrior princess of Mithila",
                    "year": 2017,
                    "pages": 350,
                    "author": {
                        "id": "597dec17345f2a446c1d7a99"
                    }
                },
                {
                    "title": "Sita Warrior princess of Mithila",
                    "year": 2017,
                    "pages": 350,
                    "author": {
                        "id": "597dec17345f2a446c1d7a99"
                    }
                },
                {
                    "title": "The Book Thief",
                    "year": 2006,
                    "pages": 350,
                    "author": {
                        "id": "597df0941beded45355964c8"
                    }
                }
            ]
        };

        return integrationServer
            .graphqlQuery(app, query)
            .then((response) => {
                expect(response.statusCode).to.equal(200);
                expect(response.body).to.have.deep.equals(expected);
            });
    });
});
