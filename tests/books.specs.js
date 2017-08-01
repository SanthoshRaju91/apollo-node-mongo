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

        return integrationServerCall(app, query, expected);
    });


    it('Should return all the authors', () => {
        const query = `
      {
        getAuthors{
          firstname
          lastname
          id
        }
      }
      `;

        const expected = {
            "getAuthors": [{
                    "firstname": "Amish",
                    "lastname": "Tripati",
                    "id": "597dec17345f2a446c1d7a99"
                },
                {
                    "firstname": "Markus",
                    "lastname": "Zusak",
                    "id": "597df0941beded45355964c8"
                }
            ]
        };

        return integrationServerCall(app, query, expected);
    });

    it('Should return author\'s details with his books', () => {
        const query = `
      {
        author(id: "597dec17345f2a446c1d7a99") {
          firstname
          lastname
          books {
            title
            year
            pages
          }
        }
      }
      `;

        const expected = {
            "author": {
                "firstname": "Amish",
                "lastname": "Tripati",
                "books": [{
                        "title": "Sita Warrior princess of Mithila",
                        "year": 2017,
                        "pages": 350
                    },
                    {
                        "title": "Sita Warrior princess of Mithila",
                        "year": 2017,
                        "pages": 350
                    }
                ]
            }
        };

        return integrationServerCall(app, query, expected);
    });
});

function integrationServerCall(app, query, expected) {
    return integrationServer
        .graphqlQuery(app, query)
        .then((response) => {
            expect(response.statusCode).to.equal(200);
        });
};
